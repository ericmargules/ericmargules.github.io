function shrinkHeader() {
    if ($(window).scrollTop() > 0) {
        $('.top_nav').removeClass('home');
        $('.top_nav').addClass('little');
        $("li > a").addClass('small_link');
        $(".top_nav > nav > li > a").removeClass('white');
        $(".top_nav > nav > li > a").addClass('black');
    } else {
        $('.top_nav').addClass('home');
        $('.top_nav').removeClass('little');
        $("li > a").removeClass('small_link');
    }
}

$(document).ready(function(){

    if ($(window).scrollTop() == 0) {
        $(".top_nav > nav > li > a").addClass('white');
        $('.top_nav_link').removeClass('blue'); 
    } else {
        $('.top_nav_link').removeClass('blue'); 
        shrinkHeader();
    }

    $('a').on("click", function() {
        $('#hero')[0].style.opacity = 1;
    });

    $(window).scroll(function() {
        shrinkHeader();
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() == 0) {
            $(".top_nav > nav > li > a").addClass('white');
        	$('.top_nav_link').removeClass('black'); 
        }
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
            var top = Math.round(($(window).scrollTop() / 6));
            $('#hero')[0].style.opacity = (1 -(top * .01));
        }
    });
});