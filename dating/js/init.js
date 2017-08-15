window.onload = function () {

    $('.carousel1').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 0,
        nav: true,
        items: 2,
        itemsCustom: false,
        responsive: {
            0 : {
                items:1
            },

            768: {
                items: 1
            },

            1024: {
                items: 2
            }
        }
    });



    $('.carousel2').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 5,
        itemsCustom: false,
            responsive : {

                0 : {
                    items:1
                },

               480 : {
                items:2
               },

               768 : {
               items:2
               },
                1024 : {
                    items:4
                },

                1280 : {
                    items:5
                }
}
    });

    $('.carousel3').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        itemsCustom: false,
        responsive : {

            0 : {
                items:1
            }

        }
    });
};


