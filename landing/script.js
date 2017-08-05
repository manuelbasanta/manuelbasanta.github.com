$(document).ready(function () {

    $('.inicio').css( 'cursor', 'pointer' );
    $(".inicio").click(function () {
        $('html, body').animate({
            scrollTop: $("html").offset().top
        }, 1000);
    });
    
    $('.car').css( 'cursor', 'pointer' );
    $(".car").click(function () {
        $('html, body').animate({
            scrollTop: $("#pag2").offset().top
        }, 1000);
    });

    $('.reg').css( 'cursor', 'pointer' );
    $(".reg").click(function () {
        $('html, body').animate({
            scrollTop: $("#pag3").offset().top
        }, 1000);
    });

    $('.ex').css( 'cursor', 'pointer' );
    $(".ex").click(function () {
        $('html, body').animate({
            scrollTop: $("#exp").offset().top
        }, 1000);
    });

});
