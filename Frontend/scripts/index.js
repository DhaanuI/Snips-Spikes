// Function used to shrink nav bar removing paddings and adding black background

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
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
