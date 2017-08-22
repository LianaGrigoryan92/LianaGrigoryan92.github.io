

$(document).ready(function() {


    $(".js-tab").click(function () {
        var tab = $(this).data("tab");
        var selector = 'div[data-tab="' + tab + '"]';



        var tabContent = $(".tabs-content").find(selector);
        $(".js-active-tab").removeClass('js-active-tab');
        $(this).addClass('js-active-tab');
        tabContent.addClass('js-active-tab');



    });



});

