/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */
import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer.js";

window.addEventListener('load', () => {
    const navLogo = document.getElementById('nav-logo');
    const logoHref = document.getElementById('logo-href');
    const bookHref = document.getElementById('bookhref');
    const viewHref = document.getElementById('viewhref');
    const contactHref = document.getElementById('contacthref');
    const loginHref = document.getElementById('loginhref');
  
    if (navLogo) {
      navLogo.src = '../images/logo.png';
    }
  
    if (logoHref) {
      logoHref.href = '../index.html';
    }
  
    if (bookHref) {
      bookHref.href = 'gender.html';
    }
  
    if (viewHref) {
      viewHref.href = 'appointment.html';
    }
  
    if (contactHref) {
      contactHref.href = '../index.html';
    }
  
    if (loginHref) {
      loginHref.href = '../routes/loginSignup/login.html';
    }
  });
  

let nav = document.getElementById("NAVBAR");
nav.innerHTML = Navbar();

// copy nav container from index.html line 12 only
// In html file write like this "<script  type="module" src="./scripts/index.js"></script>" must include type=module

// Function used to shrink nav bar removing paddings and adding black background

window.addEventListener("scroll", function () {
  var navBar = document.querySelector(".nav");
  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("affix");
    console.log("Working");
  } else {
    navBar.classList.remove("affix");
  }
});

const myElement = document.getElementById("visible1");
var navBar = document.querySelector(".nav");

const observer = new IntersectionObserver((entries) => {
  const isVisible = entries[0].isIntersecting;
  if (!isVisible) {
    navBar.classList.add("affix");
    console.log("Working");
  } else {
    navBar.classList.remove("affix");
  }
});

observer.observe(myElement);

// Function to show and hide hamburger content

var navTrigger = document.querySelector(".navTrigger");
var mainListDiv = document.querySelector("#mainListDiv");

navTrigger.addEventListener("click", function () {
  navTrigger.classList.toggle("active");
  mainListDiv.classList.toggle("show_list");
  mainListDiv.style.display = "block";
});

/* --------------------------------- Footer --------------------------------- */
let footer = document.getElementById("footer-main");
footer.innerHTML = Footer();

/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */

// let insta = document.getElementById("insta");

// console.log(insta.src)

/* -------------------------------------------------------------------------- */
/*           clearing the localStorage and changing Login to Logout           */
/* -------------------------------------------------------------------------- */

let loginstat = document.getElementById("loginhref");
let data = JSON.parse(localStorage.getItem("userdata"));
if(data){
  if (data.message == "Login successfully") {
    loginstat.innerText = "Logout";
    if (loginstat.innerText == "Logout") {
      loginstat.addEventListener("click", () => {
        localStorage.clear();
        loginstat.innerText = "Login";
      });
    }
  } else {
    loginstat.innerText = "Login";
  }  
}

let userdata=JSON.parse(localStorage.getItem("userdata"));
window.onload=fetAllAppointmentFn(userdata.userid);

async function fetAllAppointmentFn(userid){
    try {
        let req=await fetch("https://nice-pink-antelope-gear.cyclic.app/appointments/appointment",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(req.ok){
            let allData=await req.json();
            let newData=allData.filter((item)=>item.userid===userid);
            renderAppointmentFunction(newData);
        }else{
            alert("Unable to Load the Data");
        }
    } catch (error) {
        console.log(error.message);
        alert("Unable to Load the Data");
    }
}



async function renderAppointmentFunction(data){
    let displayContainer=document.getElementById("appointment_grid");
    displayContainer.innerHTML=null;
    let appointmentArr=data.map((item)=>{
        return`<div class="appointment_card">
        <div class="service_name">${item.service_name}</div>
        <div class="service_des">
        ${item.service_des}
        </div>
        <div class="appointment_styler">Styler Name : ${item.styler_name}</div>
        <div class="appointment_date">Appointment Date : ${item.date}</div>
        <div class="appointment_time">Appointment Time : ${item.time}</div>
        <button class="cancel_btn" data-id=${item._id}>cancel</button>
    </div>`;
    })
    displayContainer.innerHTML=appointmentArr.join("");
    let all_cancel_btns=document.querySelectorAll(".cancel_btn");
    for(let cancel_btn of all_cancel_btns){
        cancel_btn.addEventListener("click",(event)=>{
            let id=event.target.dataset.id;
            deleteAppointmentFunction(id);
        })
    } 
}


async function deleteAppointmentFunction(id){
    try {
        let delete_req=await fetch(`https://nice-pink-antelope-gear.cyclic.app/appointments/appointment/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(delete_req.ok){
            alert("Appointment is successfully canceled");
            fetAllAppointmentFn(userdata.userid);
        }else{
            alert("Unable to cancel the appointment!");
        }
    } catch (error) {
        console.log(error.message);
        alert("Unable to cancel the appointment!");
    }
}


