// ------------------- Login Part ----------------------

const SubmitButton = document.querySelector(".submit");

const UserName = document.querySelector("#username");
const Password = document.querySelector("#password");

SubmitButton.addEventListener("click", () => {
  UserName.value == "admin" && Password.value == "hairsalon"
    ? (alert("Welcome Admin"), ((UserName.value = ""), (Password.value = "")))
    : alert("Wrong Credentials");
});


// ------------------- DarkMode Part ----------------------

const Moon = document.querySelector("#moon");
const HTML = document.querySelector('html');
const LoginBox = document.querySelector('.login-box');

Moon.addEventListener("click", (e) => {
  if (Moon.className == "bx bx-moon") {
    e.target.className = "bx bx-sun";
    HTML.style.background="white";
    LoginBox.id = "lg";
  } else {
     window.location.reload();
  }
});