const express = require("express");
const bcrypt = require("bcrypt");
const { Client } = require("pg");

const router = express.Router();

// PG Client setup
const client = new Client({
  host: "localhost",
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

client.connect();

router.post("/", async (req, res) => {
  const reqData = await req.body;
  const name = await req.body.name;
  const email = await req.body.email;
  var password = await req.body.password; // Password handled!

  // Type to check where the request came from?
  const type = reqData.log;
  var id = 0;

  // Bcrypt hashing
  try {
    // Salt generation
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    password = hashedPassword; // setting password to new hashed password
  } catch (error) {
    res.send(error); // error while hashing
  }

  // To auto handle user's IDs/indices
  function handleId() {
    return new Promise(function (resolve, reject) {
      client.query(
        `Select id from user_data ORDER BY id Desc`,
        (error, result) => {
          if (!error) {
            id = result.rows[0].id;
            resolve(id);
          } else {
            res.send(error); // error while handling IDs
            reject(0);
          }
        }
      );
    });
  }

  // querying according to where the request came from
  // user trying to login
  if (type === "login") {
    client.query(
      "Select * from user_data where email='" + email + "'",
      async function (err, result) {
        if (err) throw err;
        else {
          // compairing plain text and stored hashed password
          if (await bcrypt.compare(reqData.password, result.rows[0].password)) {
            res.send(result.rows);
          } else {
            // Password is wrong
            res.send("Sorry, that didn't worked :(");
          }
        }
      }
    );
  }
  // user registrating/signing up
  if (type === "signup") {
    // handling the handleId function Promise
    handleId().then((newId) => {
      // incrementing index everytime a new user is added
      newId = id + 1; // to assign that new index
      client.query(
        "Insert into user_data (id, name, email, password) VALUES ('" +
          newId +
          "','" +
          name +
          "','" +
          email +
          "','" +
          password +
          "')",
        function (err, result) {
          if (err) throw err; // error while querying/Inserting data of user
          else {
            res.send("Registeration Successful!");
          }
        }
      );
    });
  }
});

client.end;

module.exports = router;
