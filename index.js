$(document).ready(function () {
    /************************************************
    HOME
    ************************************************/
    $('.pantaportfolio').hide();
    $('.pantaabout').hide();
    $('.pantacontact').hide();
    $('.pantaskills').hide();
    $('.titulos').addClass('animated fadeInUp');
    setTimeout(function () {
        $('.about').css('opacity', '1');
        $('.about').addClass('animated fadeInRight');
    }, 500);
    setTimeout(function () {
        $('.skills').css('opacity', '1');
        $('.skills').addClass('animated fadeInRight');
    }, 600);
    setTimeout(function () {
        $('.portfo').css('opacity', '1');
        $('.portfo').addClass('animated fadeInRight');
        $('.homea').addClass('animated fadeInLeft');
        $('.homec').addClass('animated fadeInLeft');
        $('.homes').addClass('animated fadeInLeft');
    }, 700);
    setTimeout(function () {
        $('.contact').css('opacity', '1');
        $('.contact').addClass('animated fadeInRight');
    }, 800);


    $('.about').on('click', function () {
        $("body").animate({
            backgroundColor: "#8D6A9F",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantaabout').fadeIn('fast');

        });
    });


    $('.skills').on('click', function () {
        $("body").animate({
            backgroundColor: "#81E979",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantaskills').fadeIn('fast');

        });
    });



    $('.portfo').on('click', function () {
        $("body").animate({
            backgroundColor: "#087F8C",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantaportfolio').fadeIn('fast');

        });
    });



    $('.contact').on('click', function () {
        $("body").animate({
            backgroundColor: "#6B7FD7",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantacontact').fadeIn('fast');

        });
    });

    /************************************************
    SKILLS
    ************************************************/
    $('.homes').on('click', function () {
        $("body").animate({
            backgroundColor: "#DE6449",
        }, 500);

        $('.pantaskills').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });

    $(".skicon").on('click',function () {
        $(this).next().fadeIn("fast");
        $(this).next().css("display", "flex");
    });
    $(".skdata").on('click',function () {
        $(this).fadeOut("fast");
    });
    
    /************************************************
    PORTFOLIO
    ************************************************/

    var wndWidth = $(window).width();
    if (wndWidth > 414) {
        $(".tbox").mouseover(function () {
            $(this).find('div').fadeIn("fast");
        });
        $(".tbox").mouseleave(function () {
            $(this).find('div').fadeOut("fast");
        });
    }

    $('.homep').on('click', function () {
        $("body").animate({
            backgroundColor: "#DE6449",
        }, 500);

        $('.pantaportfolio').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });

    /************************************************
    ABOUT
    ************************************************/
    $('.homea').on('click', function () {
        $("body").animate({
            backgroundColor: "#DE6449",
        }, 500);

        $('.pantaabout').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });

    /************************************************
    ABOUT
    ************************************************/
    $('.homec').on('click', function () {
        $("body").animate({
            backgroundColor: "#DE6449",
        }, 500);

        $('.pantacontact').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });
});
