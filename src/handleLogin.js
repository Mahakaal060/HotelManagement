// Variables
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.querySelector("form");

// Functions
const handleLogin = (e) => {
  e.preventDefault();
  console.log("Helo");
};

// Events
loginForm.addEventListener("click", handleLogin(e));
