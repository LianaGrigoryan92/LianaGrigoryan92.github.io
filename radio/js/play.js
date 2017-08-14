$(document).ready(function(){

    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;




    // function maxwidth800action(mql){
    //     if (mql.matches){


            var headerHeight = $(".site-header").height();
            var footerHeight = $(".site-footer").height();

            var homePageHeight = winHeight - footerHeight - headerHeight;

            $(".home-page").height(homePageHeight);
            $(".login-page").height(winHeight);






            $(window).resize(function () {
                var winHeight = window.innerHeight;
                var headerHeight = $(".site-header").height();
                var footerHeight = $(".site-footer").height();

                var homePageHeight = winHeight - footerHeight - headerHeight;

                $(".home-page").height(homePageHeight);
            });


        //
        // }
        // else{
        //
        //     $(".home-page").css("height","1000px");
        //
        //     alert(">768");
    //     }
    // }
    //
    //
    //
    // var mql = window.matchMedia("screen and (min-width: 769px)")
    //
    //
    // mql.addListener(maxwidth800action);





    $('.play-pause>img').on("click",function () {
        var attr = $(this).attr("src");

        if ( attr == 'images/icons/play.png'){
            $(this).attr('src','images/icons/pause.png');
        } else {
            $(this).attr('src','images/icons/play.png');
        }
    });





});