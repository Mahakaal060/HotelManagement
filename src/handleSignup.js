// Variables
const submitSignUpBtn = document.getElementById("submitSignUpBtn");
const signinBtn = document.getElementById("signinBtn");
const homeBtn = document.getElementById("homeBtn");
const nameInput = document.getElementById("exampleInputName");
const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");

// Functions
const handleSignUp = async () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const res = await axios.post("http://localhost:5000/", {
    name: name,
    email: email,
    password: password,
    log: "signup",
  });
};

const goHome = () => {
  location.href = "/";
};

const goSignIn = (event) => {
  event.preventDefault();
  location.href = "/login.html";
};

// Events
submitSignUpBtn.addEventListener("click", function (event) {
  event.preventDefault();
  handleSignUp();
});

homeBtn.addEventListener("click", goHome);

signinBtn.addEventListener("click", goSignIn);
