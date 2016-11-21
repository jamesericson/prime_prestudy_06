console.log("Hey this works!");
var clickNo = 0;


$(document).ready(function() {
  $('.portrait').on('click', function() {
    $('header, main, footer').slideToggle();
  });
});
