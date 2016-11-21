console.log("Hey this works??");
var clickNo = 0;


$(document).ready(function() {
  $('header, main, footer').hide();
  $('body').animate({padding:"-=50"},1);
  $('.portrait').animate({opacity: .20, left: "+=200"},1);

  $('.welcome').on('mouseenter', function() {
    if(clickNo == 0){
    $('.portrait').animate({opacity: .35},'fast');
    }
  })
  $('.welcome').on('mouseleave', function() {
    if(clickNo == 0){
    $('.portrait').animate({opacity: .20},'fast');
    }
  })


  $('.portrait, .welcome').on('click', function() {
  if (clickNo == 0){
    $('header, main, footer').slideDown();
    $('body').animate({padding:"+=50"});
    $('.welcome').animate({opacity: 0, left: "-=200"});
    $('.portrait').animate({opacity: 1, left: "-=200"});
    clickNo++;
    console.log("clickNo++");
  }
  });

  console.log("clickNo = "+clickNo);
});
//this is a test
