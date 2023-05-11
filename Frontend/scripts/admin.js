// ------------------- API's ----------------------

const BaseUrl = 'https://hair-salon-backend.onrender.com';
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

  UserNames.value == "" || Passwords.value == "" ? 
    (
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Fill Credentials',
        width:"25%",
      })
    ) :  AdminDataPost(Credentials);
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

    if(res.status==200){ 
        (UserNames.value = ""), 
        (Passwords.value = ""),

         Swal.fire({
          title: 'Please Confirm ',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm',
          confirmButton:true,
          width:"24%"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title:'Welcome Admin',
                width:"25%",
                confirmButton:true,
            }).then((value)=>{
              if(value.isConfirmed) {
                window.location.href = "../html/adminrender.html"
              }
           })            
          }
        })
            
      }else{

        Swal.fire({
          title: 'Wrong Credentials',
          width:"25%",
          background:"#243b55",
          color:"red"
        })

        UserNames.value = "" ;
        Passwords.value = "" ;
      }

  } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bad Request 404',
        width:"25%",
      })
      UserNames.value = "" ;
      Passwords.value = "" ;
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