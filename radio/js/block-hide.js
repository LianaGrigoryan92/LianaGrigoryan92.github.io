
$(document).ready(function() {

$(".right-arrow").click(function(){
    $(".navigation-menu-content").fadeIn();
    $(".right-arrow").hide();
    $(".left-arrow").show();

});

    $(".left-arrow").click(function(){
        $(".navigation-menu-content").fadeOut();
        $(".left-arrow").hide();
        $(".right-arrow").show();

    });

});