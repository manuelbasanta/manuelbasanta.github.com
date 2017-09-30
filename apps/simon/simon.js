var secuencia = [];
var turno = 0;
var clicnum = 0;
var round = 0;
var strict = false;
var sounds = ['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3', 'https://freesound.org/data/previews/142/142608_1840739-lq.mp3'];
var speeds = {
    'slow': 1000,
    'med': 600,
    'fast': 400
};
var speed = 1000;
(function ($) {
    $.extend({
        playSound: function () {
            return $(
                '<audio class="sound-player" autoplay="autoplay" style="display:none;">' +
                '<source src="' + arguments[0] + '" />' +
                '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>' +
                '</audio>'
            ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);


function animate(num) {
    var rclass = 'b' + num;
    var aclass = 'b' + num + 'on';
    $('.' + rclass).removeClass(rclass).addClass(aclass);
    $.playSound(sounds[num - 1]);
    setTimeout(function () {
        $('.' + aclass).removeClass(aclass).addClass(rclass);
    }, speed - speed / 2);
}

function newnum() {
    var num = Math.floor(Math.random() * 4) + 1;
    secuencia[turno] = num;
    turno++;
}

function compiter() {
    round++;
    $('.score').html(round);
    newnum();
    var count = 0;
    if (round > 12) {
        speed = speeds.fast;
    } else if (round > 8) {
        speed = speeds.med;
    } else {
        speed = speeds.slow;
    }
    var interval = setInterval(function () {
    
        if (count == turno - 1) {
            clearInterval(interval);
            $(".unclicable").addClass('clicable').removeClass('unclicable');
            $('.unclicableres').addClass('clicableres').removeClass('unclicableres');
        }
        animate(secuencia[count]);
        count++;
    }, speed);

}

function afterfail() {
    var count = 0;
    var interval = setInterval(function () {

        if (count == turno - 1) {
            clearInterval(interval);
            $(".unclicable").addClass('clicable').removeClass('unclicable');
            $('.unclicableres').addClass('clicableres').removeClass('unclicableres');
        }
        animate(secuencia[count]);
        count++;
    }, speed);

}

$(document).ready(function () {
    
    $('.sides').on('click', '.clicastart', function () {
        $('.clicastart').css('background-color', '#958181');
        $('.clicastart').css('color', 'beige')
        $('.clicastart').removeClass('clicastart');
        compiter();
    });

    $(".row")
        .on('mousedown', '.clicable', function () {
            if (this.id == secuencia[clicnum]) {
                $(this).removeClass('b' + this.id).addClass('b' + this.id + 'on');
                $.playSound(sounds[this.id - 1]);


            } else {
                $(this).css('color', 'red');
                $.playSound(sounds[4]);
            }


        })
        .on('mouseup', '.clicable', function () {
            $(this).removeClass('b' + this.id + 'on mistake').addClass('b' + this.id);
            $(this).css('color', '#242331');
            if (this.id != secuencia[clicnum]) {
                $('.clicable').removeClass('clicable').addClass('unclicable');
                $('.clicableres').removeClass('clicableres').addClass('unclicableres');
                clicnum = 0;
                if (strict) {
                    secuencia = [];
                    turno = 0;
                    clicnum = 0;
                    round = 0;

                    compiter();
                } else {
                    afterfail();
                }
            } else {
                clicnum++;
                if (clicnum == turno) {
                    $('.clicable').removeClass('clicable').addClass('unclicable');
                    $('.clicableres').removeClass('clicableres').addClass('unclicableres');
                    clicnum = 0;
                    if (round == 20) {
                        $('.megawrap').fadeOut('slow')
                        $('.unclicableres').addClass('clicableres').removeClass('unclicableres');
                        setTimeout(function () {
                            $('#congrats').fadeIn('slow');
                        }, 600);
                    } else {
                        compiter();
                    }
                }
            }

        });

    $('.sides').on('click', '#strict', function () {
        if (strict) {
            strict = false;
            $(this).css('background-color', '#242331');
        } else {
            strict = true;
            console.log(strict);
            $(this).css('background-color', '#e35959');
        }

    });

    $('body').on('click', '.clicableres', function () {   
        secuencia = [];
        turno = 0;
        clicnum = 0;
        round = 0;
        $('.score').html(' --');
        $('#start').css('background-color', '#242331');
        $('#start').addClass('clicastart');
        $('.megawrap').show();
        $('#congrats').hide();
        
    });
});
