// Variables
const submitLoginBtn = document.getElementById("submitLoginBtn");
const homeBtn = document.getElementById("homeBtn");
const signupBtn = document.getElementById("signupBtn");
const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");

// Functions
const handleLogin = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    const res = await axios.post("http://localhost:5000/", {
      email: email,
      password: password,
      log: "login",
    });
    if (res.data) {
      console.log(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};

const goHome = () => {
  location.href = "/";
};

const goSignUp = (event) => {
  event.preventDefault();
  location.href = "/signup.html";
};

// Events
submitLoginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  handleLogin();
});

homeBtn.addEventListener("click", goHome);

signupBtn.addEventListener("click", goSignUp);
