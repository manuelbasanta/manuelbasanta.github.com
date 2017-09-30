var display = '';
var ya_tiene = false;
var resuelto = true;

function cambio(num) {
    display += num;
    $(".screen").html(display);
}
if (display.length > 17) {
    $(".screen").html("Digit limit");
            ya_tiene = true;
            resuelto = true;
}

$(document).ready(function () {
    $(".num").on("click", function () {
        if (resuelto === true) {
            display = '';
            var data = $.trim($(this).text());
            cambio(data);
            resuelto = false;
            ya_tiene = false;

        } else if (display.length <= 17 || typeof display.length === "undefined") {
            var data = $.trim($(this).text());
            cambio(data);
            ya_tiene = false;
        }

    });
    $("#AC").on("click", function () {
        display = '';
        $(".screen").html(display);
        ya_tiene = false;
    });
    $("#eq").on("click", function () {
        display = eval(display)
        if (display % 1 != 0) {
            display = display.toFixed(10);
        }
        if ((display.toString()).length > 17) {

            $(".screen").html("Digit limit");
            ya_tiene = true;
            resuelto = true;
        } else {

            $(".screen").html(display);
            ya_tiene = false;
            resuelto = true;
        }
    });
    $(".op").on("click", function () {
        if (!ya_tiene && display != '' && (display.length <= 17 || typeof display.length === "undefined")) {
            var data = $.trim($(this).text());
            display += data;
            $(".screen").html(display);
            ya_tiene = true;
            resuelto = false;
        }
        if (display.length >= 17) {
            $(".screen").html("Digit limit");
            ya_tiene = true;
            resuelto = true;
        }

    });
});
