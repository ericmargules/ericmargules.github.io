function shrinkHeader() {
    if ($(window).scrollTop() > 0) {
        $('.top_nav').removeClass('home');
        $('.top_nav').addClass('little');
        $("li > a").addClass('small_link');
        $(".top_nav > nav > li > a").removeClass('blue');
        $(".top_nav > nav > li > a").addClass('black');
    } else {
        $('.top_nav').addClass('home');
        $('.top_nav').removeClass('little');
        $("li > a").removeClass('small_link');
        $(".top_nav > nav > li > a").removeClass('black');
        $(".top_nav > nav > li > a").addClass('blue');
    }
}

$(document).ready(function(){
    
    shrinkHeader;
    
    $(window).scroll(function() {
        shrinkHeader();
    });
});