// ----------------->>>> API and their EndPoints <<<<---------------------

const BaseUrl = "https://nice-pink-antelope-gear.cyclic.app";
const DefaultUrl = `${BaseUrl}/user`;
const RegisterUrl = `${DefaultUrl}/register`

import loading from "../components/loading.components.js";
import hideLoading from "../components/hideLoading.components.js";

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  Toast.fire({
    icon: 'success',
    title: 'welcome to register page'
  })

const singupfrom = document.getElementById('register-form');
singupfrom.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("pass").value
    const user = { name, email, password }
    loading()
    register(user)
})

const register = async (user) => {
    try {

        const res = await fetch(RegisterUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        let data = await res.json()
        if (data.err) {
           
              
             await Toast.fire({
                icon: 'error',
                title: 'Error while registering'
              })
            hideLoading()
            window.location.reload();

        }
        else {
                          
             await Toast.fire({
                icon: 'success',
                title: 'User created successfully'
              })

            window.location.href = "./login.html"
        }
    } catch (error) {
        console.log(error.message);
    }

}