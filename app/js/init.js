window.onload = function() {
    /*******Carusels function*******/
    $('.home-page-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.about-page-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1024: {
                items: 2
            }

        }
    });

    $( ".about-team-content>div" ).css("left","0");

    /*******Carusels function END*******/

    if ( $(window).width() <= 1200) {
        circleAtributs(90);
    } else {
        circleAtributs();
    }

    $(".mobile-menu-burger").on("click", function () {
        $(".site-menu-block").toggleClass("show");
    });






};


$( ".pluse" ).click(function() {
    $( ".privacy-text" ).slideToggle( "slow", function() {

    });
});