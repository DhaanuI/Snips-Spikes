/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */
import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer.js";


window.onload = () => {
  document.getElementById("nav-logo").src = "../images/logo.png"
  document.getElementById("logo-href").href = "./index.html"
  document.getElementById("bookhref").href = "../html/gender.html"
  document.getElementById("viewhref").href = "../index.html"
  document.getElementById("contacthref").href = "../index.html"
  document.getElementById("loginhref").href = "../index.html"
};


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

const card_div = document.querySelector(".car-div"); 

async function getData (){
  try {
    let data = await fetch("http://localhost:8080/services/female/")
    data = await data.json();
    renderData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


getData()




function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
    <div id="${ele._id}" class="card-body-service">
      <div class="images">
        <img src=${ele.image} alt="">
      </div>
      <div class="description" >
        <p class="heading">${ele.name.slice(0,20)}<p>
        <p>${ele.description.slice(0,50)}...</p>
      
        <div  class="button"> <p class = "price">${ele.price}</p> <p id="${ele._id}"  class = "bookservice">Book Service</p></div>

      </div>
    </div>
        `;
  });
  return formatedData.join("");
}


async function renderData(product_data) {
  console.log(product_data);
    let datadisplay = document.querySelector(".cards-div");
    datadisplay.innerHTML = getCard(product_data);
  
    // bookapointment button
  
    let bookapointment = document.querySelectorAll(".button");
    console.log(bookapointment);
    for (let btn of bookapointment) {
      btn.addEventListener("click", (event) => {
        let product_id = event.target.id;
       
        getServiceDat(product_id)
       
       
      });
    }
    
    // // edit 

  
  }

  async function getServiceDat(id) {
    try {
      let data = await fetch(`http://localhost:8080/services/female/${id}`)
      data = await data.json()
      sessionStorage.setItem("service_data",JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  } 