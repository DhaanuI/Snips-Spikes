/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */
import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer.js";

window.onload = () => {
  document.getElementById("nav-logo").src = "../images/logo.png";
  document.getElementById("logo-href").href = "../index.html";
  document.getElementById("bookhref").href = "gender.html";
  document.getElementById("viewhref").href = "appointment.html";
  document.getElementById("contacthref").href = "./feedbackForm.html";
  // document.getElementById("loginhref").href =
  //   "../routes/loginSignup/login.html";
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



/* -------------------------------------------------------------------------- */
/*           clearing the localStorage and changing Login to Logout           */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*           clearing the localStorage and changing Login to Logout           */
/* -------------------------------------------------------------------------- */

let loginstat = document.getElementById("loginhref");
let data = JSON.parse(localStorage.getItem("userdata")) || null;
if (data) {
  if (data.message == "Login successfully") {
    loginstat.innerText = "Logout";
    if (loginstat.innerText == "Logout") {
      loginstat.addEventListener("click", () => {
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Logout!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("userdata");
            loginstat.innerText = "Login";
            Swal.fire("Logout Successfull!").then((res) => {
              if (res) {
                window.location.href = "../index.html";
              }
            });
          }
        });
      });
    }
  } else {
    loginstat.innerText = "Login";
  }
}

// provide login page an href
if (loginstat && loginstat.innerText == "Login") {
  loginstat.href = "../routes/loginSignup/login.html";
}

const card_div = document.querySelector(".car-div");

async function getData() {
  try {
    let data = await fetch(
      "https://hair-salon-backend.onrender.com/services/female/"
    );
    data = await data.json();
    renderData(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
    <div id="${ele._id}" class="card-body-service">
      <div class="images">
        <img src=${ele.image} alt="">
      </div>
      <div class="description" >
        <p class="heading">${ele.name.slice(0, 20)}<p>
        <p>${ele.description.slice(0, 50)}...</p>
      
        <div  class="button"> <p class = "price">₹ ${ele.price}</p> <p id="${
      ele._id
    }"  class = "bookservice">Book Service</p></div>

      </div>
    </div>
        `;
  });
  return formatedData.join("");
}

async function renderData(product_data) {
  let datadisplay = document.querySelector(".cards-div");
  datadisplay.innerHTML = getCard(product_data);

  // bookapointment button

  let bookapointment = document.querySelectorAll(".button");
  for (let btn of bookapointment) {
    btn.addEventListener("click", (event) => {
      let product_id = event.target.id;
      getServiceDat(product_id);
    });
  }

  // // edit
}

async function getServiceDat(id) {
  try {
    let data = await fetch(
      `https://hair-salon-backend.onrender.com/services/female/${id}`
    );
    data = await data.json();
    sessionStorage.setItem("service_data", JSON.stringify(data));
    window.location.href = "../html/styler.html";
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Bad Request 404',
      width:"25%",
    })
  }
}
