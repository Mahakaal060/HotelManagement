// Variables
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.querySelector("form");
const homeBtn = document.getElementById("homeBtn");

// Functions
const handleLogin = () => {
  console.log("Login here...");
};

const goHome = () => {
  location.href = "/";
};

// Events
loginForm.addEventListener("click", function (event) {
  event.preventDefault();
  handleLogin();
});

homeBtn.addEventListener("click", goHome);
