$(document).ready(function(){

    var $nav_menu_item = $('.nav-menu a');

    $nav_menu_item.click(scrollToContent);


    function scrollToContent(e) {
        e.preventDefault();
        var $this  = $(this),
           content  = $this.attr('href'),
           $content  = $(content),
           itemOffsetTop = $content.offset().top,
           docScrlTop  =  document.body.scrollTop;

         animateBody(itemOffsetTop + docScrlTop);

    }

    function animateBody(scrollTop) {
        $("html, body").animate({ scrollTop: scrollTop }, "slow");
    }

});
