console.log("Hey this works!");
var clickNo = 0;


$(document).ready(function() {
  $('header, main, footer').hide();
  $('body').animate({padding:"-=50"},1);
  $('.portrait').animate({left: "+=200"},1);


  $('.portrait').on('click', function() {
  if (clickNo == 0){
    $('header, main, footer').slideDown();
    $('body').animate({padding:"+=50"});
    $('.portrait').animate({left: "-=200",});
    clickNo++;
    console.log("clickNo++");
  }
  });
  
  console.log("clickNo = "+clickNo);
});
