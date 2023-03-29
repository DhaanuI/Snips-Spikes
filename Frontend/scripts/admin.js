// ------------------- API's ----------------------

const BaseUrl = 'http://localhost:7005';
const Default = `${BaseUrl}/admin`
const PostDataCheck = `${Default}/check`

// ------------------- Login Part ----------------------

const SubmitButton = document.querySelector(".submit");

const UserNames = document.querySelector("#username");
const Passwords = document.querySelector("#password");

SubmitButton.addEventListener("click", () => {

  const Credentials = {
    UserName:UserNames.value,
    Password:Passwords.value
  }

  UserNames.value == "" && Passwords.value == "" ? alert('Fill Credentials') :  AdminDataPost(Credentials);
});



// -------- Posting The Data To Backend For Checking --------

const AdminDataPost = async (Credentials) =>{
  try {
    const res = await fetch(PostDataCheck,{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(Credentials)
    })

    const data = await res.json();
    
    res.status==202 ? 
        (alert(data.Message),
        (UserNames.value = ""), 
        (Passwords.value = ""),
        (window.location.href = `${data.Location}`)) 
    : alert(data.Message);

  } catch (error) {
      alert("Bad Request");
  }
}



// ------------------- DarkMode Part ----------------------

const Moon = document.querySelector("#moon");
const HTML = document.querySelector('html');
const LoginBox = document.querySelector('.login-box');

Moon.addEventListener("click", (e) => {
  if (Moon.className == "bx bx-moon") {
    e.target.className = "bx bxs-sun";
    HTML.style.background="white";
    LoginBox.id = "lg";
  } else {
     window.location.reload();
  }
});