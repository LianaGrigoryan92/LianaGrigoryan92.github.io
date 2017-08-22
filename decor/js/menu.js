$( ".menu-hide" ).click(function() {


    $(".navigation-menu").slideToggle();




});

//
// $( ".close" ).click(function() {
//
//
//     $(".close").css("display","none");
//     $(".menu>span").css("display","block");
//     $(".navigation").css("left","-243px");
//
//
// });


$( ".search-icon" ).click(function() {


    $(".search-block").slideToggle();
    $(".menu-hide").fadeOut();
    $(".logo").fadeOut();
    $(".search-icon").fadeOut();
    $(".search-close").fadeIn();





});



$( ".search-close" ).click(function() {


    $(".search-block").slideToggle();
    $(".menu-hide").fadeIn();
    $(".logo").fadeIn();
    $(".search-icon").fadeIn();
    $(".search-close").fadeOut();





});