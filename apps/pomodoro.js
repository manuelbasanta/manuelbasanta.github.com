var show = 25;
var original = 25 * 60;
var sec = original;
var pause = true;
var rojo = true;

function start() {
    var intervalID = window.setInterval(function () {
        if (sec == 0) {
            clearInterval(intervalID);
            $("#timer").html('Done!');
        } else {
            pause = false;
            sec--;
            var minutes = Math.floor(sec / 60);
            var seconds = sec - minutes * 60;
            $("#timer").html(minutes + ':' + ('0' + seconds).slice(-2));
            
            
            
            
            if (rojo) {
                $("#flecha").animate({
                height: 100,
                width: 100,
            }, 
                                     200);
                rojo = false;
            } else {
                $("#flecha").animate({
                height: 0,
                width: 0,
            }, 200);
                rojo = true;
            }
            



            $("#pause").on("click", function () {
                pause = true;
                clearInterval(intervalID);
            });
            $("#reset").on("click", function () {
                pause = true;
                sec = original;
                minutes = Math.floor(sec / 60);
                seconds = sec - minutes * 60;
                $("#timer").html(minutes + ':' + ('0' + seconds).slice(-2));
                clearInterval(intervalID);
            });
        }
    }, 1000);

}

$(document).ready(function () {
    $("#start").on("click", function () {
        if (pause) {
            start();
        }
    });

    $('.minus').on('click', function () {
        if (show > 1) {
            show--;
            original -= 60;
            sec = original;
            $('#seted').html(show);
            var minutes = Math.floor(sec / 60);
            var seconds = sec - minutes * 60;
            $("#timer").html(minutes + ':' + ('0' + seconds).slice(-2));
        }
    });
    $('.plus').on('click', function () {
        if (show < 99) {
            show++;
            original += 60;
            sec = original;
            $('#seted').html(show);
            var minutes = Math.floor(sec / 60);
            var seconds = sec - minutes * 60;
            $("#timer").html(minutes + ':' + ('0' + seconds).slice(-2));
        }
    });
});
