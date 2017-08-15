$(document).ready(function () {

    var logHide = $(".login-hide");
    var searchHide= $(".search-hide")

    $(document).on('click', '.search', function () {

        $(".search-hide").fadeIn( "slow");
        $(".login-hide").fadeOut( "slow");

        if ($(".menu-block").hasClass("active")) {
            $(".menu-block").toggleClass("active");
            $(".menu-block").slideToggle();
        }
        $(".menu-block").removeClass("active");
        $(".login-hide").removeClass("active");





    });



    $(document).on('click', '.search-close', function () {
        $(".search-hide").fadeOut( "slow");



    });




    // $( ".user-fields > div > input" ).keydown(function () {
    //     $(".focus-hide").css("display", "none");
    //
    // });


    $(document).on('click', '.login', function () {

        $(".login-hide").toggleClass("active");
        if ($(".menu-block").hasClass("active")) {
            $(".menu-block").toggleClass("active");
            $(".menu-block").slideToggle();
        }
        $(".login-hide").slideToggle();





    });


    $(document).on('click', '.site-header .menu-hide span', function () {
        $(".menu-block").toggleClass("active");
        if ($(".login-hide").hasClass("active")) {
            $(".login-hide").toggleClass("active");
            $(".login-hide").slideToggle();
        }
        $(".menu-block").slideToggle();


});


    $('#aniimated-thumbnials').lightGallery({
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false
    });

});


