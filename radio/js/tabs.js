

$(document).ready(function() {


    $(".js-tab").click(function () {
        var tab = $(this).data("tab");
        var selector = 'div[data-tab="' + tab + '"]';

        console.log(selector);

        var tabContent = $(".tabs-content").find(selector);
        $(".js-active-tab").removeClass('js-active-tab');
        tabContent.addClass('js-active-tab');

        console.log(tabContent);
    });


    $(".login-js-tab").click(function () {


        var tab = $(this).data("tab");
        var selector = 'div[data-tab="' + tab + '"]';

        console.log(selector);

        var tabContent = $(".login-tabs-content").find(selector);
        $(".js-active-tab").removeClass('js-active-tab');
        tabContent.addClass('js-active-tab');

        console.log(tabContent);
    });

});

