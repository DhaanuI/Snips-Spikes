// ------------------- Login Part ----------------------

const SubmitButton = document.querySelector('.submit');

const UserName = document.querySelector('#username');
const Password = document.querySelector('#password');


SubmitButton.addEventListener('click', () =>{
    UserName.value == "admin" && Password.value == "dobaramatpuchna" ? 
    (alert('Welcome Admin'), (UserName.value="", Password.value="")) : 
    alert('Wrong Credentials');
})