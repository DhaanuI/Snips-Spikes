// ----------------->>>> API and their EndPoints <<<<---------------------

const BaseUrl = "https://nice-pink-antelope-gear.cyclic.app";
const DefaultUrl = `${BaseUrl}/user`;
const LoginUrl = `${DefaultUrl}/login`


import loading from "../components/loading.components.js";
import hideLoading from "../components/hideLoading.components.js";

 

const from = document.getElementById('login-form');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = from.your_name.value;
    let password = from.your_pass.value;
    login({ email, password })
    loading()
})




const login = async (user) => {

    try {

        const res = await fetch(LoginUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (res.ok) {
            
            let data = await res.json()

            const { value: OTP } = await Swal.fire({
                title: 'Enter your OTP',
                input: 'number',
                inputLabel: '',
                inputPlaceholder: 'Check OTP in your Mail ID',
                inputAttributes: {
                  maxlength: 4,
                  autocapitalize: 'off',
                  autocorrect: 'off'
                }
              })
              
              if (OTP) 
              {
                if(data.otp == OTP){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    await  Toast.fire({
                         icon: 'success',
                         title: 'Signed in successfully'
                         
                     })
                     localStorage.setItem('userdata', JSON.stringify(data))
                     window.location.href = "../../index.html" 
                }
                else{
                    Swal.fire(`Invalid OTP: ${OTP}`)
                }
                
              }
              else{
                Swal.fire(`Invalid OTP: ${OTP}`)
              }

         
            
        } else {
            let data = await res.json()
            alert(data.message);
            document.body.style.backgroundColor = 'white';
            hideLoading()
            window.location.reload();
        }

    } catch (error) {
        loading()
        Swal.fire({
            title: 'Error!',
            text: 'Wrong credentials',
            icon: 'error',
            confirmButtonText: 'Retry'
        })

        hideLoading()

    }

}


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

