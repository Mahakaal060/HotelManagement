// Variables
const signUpForm = document.querySelector("form");
const signinBtn = document.getElementById("signinBtn");
const homeBtn = document.getElementById("homeBtn");

// Functions
const handleSignUp = () => {
  console.log("Signup here...");
};

const goHome = () => {
  location.href = "/";
};

const goSignIn = () => {
  location.href = "/login.html";
};

// Events
signUpForm.addEventListener("click", function (event) {
  event.preventDefault();
  handleSignUp();
});

homeBtn.addEventListener("click", goHome);

signinBtn.addEventListener("click", goSignIn);
