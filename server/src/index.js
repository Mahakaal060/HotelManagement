const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const mainController = require("./controller");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Routes
app.use("/", mainController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running or port ${PORT}`);
});
