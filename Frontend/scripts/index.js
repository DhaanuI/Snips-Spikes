// Function used to shrink nav bar removing paddings and adding black background

$(window).scroll(function () {
  if ($(document).scrollTop() > 700) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

// Function to show and hide hamburger content
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  //   console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

// section-two slider//

const TIMEOUT = 6000;

let $radios, $activeRadio, currentIndex, radiosLength;

const handleNext = () => {
  debugger;
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
  debugger;
  myStopFunction();
});

$(".slider").mouseleave(() => {
  interval = setInterval(handleNext, TIMEOUT);
});
