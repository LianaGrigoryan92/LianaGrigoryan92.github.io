$( ".menu-icon>a" ).click(function() {
    $( ".hide-block" ).removeClass( "hidden" );
    $("body").css("overflow-y","hidden");
    $("html").css("overflow-y","hidden");

});


$( ".close-menu" ).click(function() {
    $( ".hide-block" ).addClass( "hidden" );
    $("body").css("overflow-y","visible");
    $("html").css("overflow-y","visible");

});