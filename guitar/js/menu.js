$( ".menu" ).click(function() {


    $(".navigation").css("left","0");
    $(".header-section .navigation ul li").addClass("menu-items-active-position");


});


$( ".close" ).click(function() {


    $(".navigation").css("left","-100%");
    $(".header-section .navigation ul li").removeClass("menu-items-active-position");

});




    $('#play').on('click', function(){
        $('#video')[0].play();
        $('#pause').css("display","block");
        $('#play').css("display","none");


    });
    $('#pause').on('click', function(){

        $('#video')[0].pause();
        $('#pause').css("display","none");
        $('#play').css("display","block");
    });
