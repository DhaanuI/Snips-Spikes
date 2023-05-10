/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */
import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer.js";

window.onload = () => {
  document.getElementById("nav-logo").src = "./images/logo.png";
  document.getElementById("logo-href").href = "index.html";
  document.getElementById("bookhref").href = "./html/gender.html";
  document.getElementById("viewhref").href = "./html/appointment.html";
  document.getElementById("contacthref").href = "./html/feedbackForm.html";
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

/* -------------------------------------------------------------------------- */
/*                     copy this to get navbar and footer                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             section-two slider                             */
/* -------------------------------------------------------------------------- */
const TIMEOUT = 4000;

let $radios, $activeRadio, currentIndex, radiosLength;

const handleNext = () => {
  // debugger;
  $radios = $('input[class*="slide-radio"]');
  $activeRadio = $('input[class*="slide-radio"]:checked');

  currentIndex = $activeRadio.index();
  radiosLength = $radios.length;

  $radios.prop("checked", false);

  if (currentIndex >= radiosLength - 1) {
    $radios.first().click();
  } else {
    $activeRadio.next('input[class*="slide-radio"]').click();
  }
};

let interval = setInterval(handleNext, TIMEOUT);

const myStopFunction = () => {
  clearInterval(interval);
};

$(".slider").hover(() => {
  // debugger;
  myStopFunction();
});

$(".slider").mouseleave(() => {
  interval = setInterval(handleNext, TIMEOUT);
});

/* --------------------- media query for video Section-1 -------------------- */

let x = window.matchMedia("(max-width:760px)");
let heroVideo = document.getElementById("herovideo");
let largeVideo =
  "https://www.mygreentrends.in/wp-content/uploads/2020/09/Section-1-Video.mp4";
let smallVideo =
  "https://www.mygreentrends.in/wp-content/uploads/2020/09/Section-1-Video-Mobile.mp4";

function videoChange() {
  if (x.matches) {
    heroVideo.src = smallVideo;
  } else {
    heroVideo.src = largeVideo;
  }
}
videoChange();
// window.addEventListener('resize', videoChange);

let timeout;
window.addEventListener("resize", function () {
  clearTimeout(timeout);
  timeout = setTimeout(videoChange, 250);
});

// Remove the event listener when it's no longer needed
window.removeEventListener("resize", videoChange);

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
                window.location.href = "index.html";
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
  loginstat.href = "./routes/loginSignup/login.html";
}