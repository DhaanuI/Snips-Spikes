const baseurl = "https://nice-pink-antelope-gear.cyclic.app/"
import loading from "../components/loading.components.js";
import hideLoading from "../components/hideLoading.components.js";


// const googlelogin = document.getElementById('googlelogin')

// googlelogin.addEventListener('click',async(e) =>{
//     e.preventDefault();

//     try {
//         const res = await fetch(`${baseurl}/auth/google/callback`,{
//             method : "GET",
//             headers : {
//                 'Content-Type' : 'application/json'
//             }
//         })
//         const data = await res.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error.message);
//     }
// // })
// const githublogin = document.getElementById('githublogin')

// githublogin.addEventListener('click',async(e) =>{
//     e.preventDefault();

//     try {
//         const res = await fetch(`https://defiant-lime-kangaroo.cyclic.app/auth/github/`,{
//             method : "GET",
//             headers : {
//                 'Content-Type' : 'application/json'
//             }
//         })
//         const data = await res.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error.message);
//     }
// })
 

const from = document.getElementById('login-form');
from.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = from.your_name.value;
    let password = from.your_pass.value;
    login({ email, password })
    loading()
    console.log(email, password);
})




const login = async (user) => {

    try {

        const res = await fetch(`${baseurl}user/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (res.ok) {
            
            let data = await res.json()
            console.log(data);

            const { value: OTP } = await Swal.fire({
                title: 'Enter your OTP',
                input: 'number',
                inputLabel: '',
                inputPlaceholder: 'Enter your OTP',
                inputAttributes: {
                  maxlength: 4,
                  autocapitalize: 'off',
                  autocorrect: 'off'
                }
              })
              
              if (OTP) 
              { console.log(data.otp ,OTP);
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
            // toast: true,
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

