//copy this to get navbar vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

import { Navbar } from "../components/Navbar.js";
import Footer from "../components/Footer.js";

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

//-------------------------Footer----------------------------

let footer= document.getElementById("footer-main")
footer.innerHTML= Footer()



//copy this to get navbar ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// section-two slider//

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
