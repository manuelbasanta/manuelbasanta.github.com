var temperatura;
var http;
var colors = [
    ["#F2F2F0", "#154C86"],
    ["#266060", "#A0873F"],
    ["#F9F4D6", "#34302D"],
    ["#2C4E66", "#A0593F"],
    ["#F3E4C3", "#2A313B"],
    ["#DD5C3D", "#495496"],
    ["#FAFAFA", "#0F0F0F"],
    ["#273D55", "#FE7D56"]
]
var num = 0;
$(document).ready(function () {
    $.ajax({
        url: "https://freegeoip.net/json/",
        cache: false,
        success: function (data) {
            var http = "https://crossorigin.me/https://api.darksky.net/forecast/4b8e6f483e6384d36bec88117b24402d/" + data.latitude + "," + data.longitude + "?units=si";

            $.ajax({
                url: http,
                cache: false,
                success: function (json) {
                    var location = (json.timezone).split("/");
                    var city = data.city;
                    var icon = json.currently.icon;

                    switch (icon) {
                        case "clear-day":
                            $("#icono").html("<i class=\"wi wi-day-sunny\"></i>");

                            break;
                        case "clear-night":
                            $("#icono").html("<i class=\"wi wi-night-clear\"></i>");
                            break;
                        case "rain":
                            $("#icono").html("<i class=\"wi wi-rain\"></i>");
                            break;
                        case "snow":
                            $("#icono").html("<i class=\"wi wi-snow\"></i>");
                            break;
                        case "sleet":
                            $("#icono").html("<i class=\"wi wi-sleet\"></i>");
                            break;
                        case "wind":
                            $("#icono").html("<i class=\"wi wi-windy\"></i>");
                            break;
                        case "fog":
                            $("#icono").html("<i class=\"wi wi-fog\"></i>");
                            break;
                        case "cloudy":
                            $("#icono").html("<i class=\"wi wi-cloudy\"></i>");
                            break;
                        case "partly-cloudy-day":
                            $("#icono").html("<i class=\"wi wi-day-cloudy\"></i>");
                            break;
                        case "partly-cloudy-night":
                            $("#icono").html("<i class=\"wi wi-night-alt-partly-cloudy\"></i>");
                            break;
                        default:
                            $("#icono").html("<i class=\"wi wi-na\"></i>");
                    }
                    temperatura = parseFloat((json.currently.temperature).toFixed(1));
                    $("#temp").html(temperatura + "°C");
                    $("#city").html(city);
                    $("#sumary").html(json.currently.summary);
                    var date = new Date(json.currently.time * 1000);
                    // Hours part from the timestamp
                    var hours = date.getHours();
                    // Minutes part from the timestamp
                    var minutes = "0" + date.getMinutes();

                    // Will display time in 10:30:23 format
                    var formattedTime = hours + ':' + minutes.substr(-2);
                    $("#time").html(formattedTime + " -");
                    $("#humedad").html(Math.trunc((json.currently.humidity * 100)) + "%");
                    $("#pres").html(Math.trunc(json.currently.pressure));
                }
            });
        }
    });
    $("#refresh").click(function () {
        $("section").css("color", colors[num % colors.length][0]);
        $("section").css("background-color", colors[num % colors.length][1]);
        $("body").css("background-color", colors[num % colors.length][0]);
        num++;
    });
    $(".vert").delay(1500).fadeIn(1000);
    $("#C").click(function () {

        $("#temp").html(temperatura + "°C");


    });
    $("#F").click(function () {
        $("#temp").html(parseFloat(((9 / 5) * temperatura + 32).toFixed(1)) + "°F");

    });


});
