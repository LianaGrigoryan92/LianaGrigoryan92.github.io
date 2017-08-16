window.onload = function () {

    $('.carousel1').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: false,
        dots:false,
        items: 4,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            },
            768 : {
                items:3
            },

            1024 : {
                items:4
            },
            1200 : {
                items:6
            }
        }
    });




};


