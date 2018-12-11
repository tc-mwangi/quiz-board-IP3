jQuery methods
fadeIn()
fadeOut()
fadeToggle()
slideDown()
slideUp()
slideToggle()

//show and hide answers

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#answer-showing").toggle();
    $("#answer-hidden").toggle();
  });
});
