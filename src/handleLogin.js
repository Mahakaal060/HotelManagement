// Variables
const loginForm = document.querySelector("form");
const homeBtn = document.getElementById("homeBtn");
const signupBtn = document.getElementById("signupBtn");

// Functions
const handleLogin = () => {
  console.log("Login here...");
};

const goHome = () => {
  location.href = "/";
};

const goSignUp = () => {
  location.href = "/signup.html";
};

// Events
loginForm.addEventListener("click", function (event) {
  event.preventDefault();
  handleLogin();
});

homeBtn.addEventListener("click", goHome);

signupBtn.addEventListener("click", goSignUp);
