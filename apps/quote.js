$(document).ready(function () {
    var color = true;

    function frase() {

        $.ajax({
            headers: {
                'X-Mashape-Key': 'b9e7wMaBcVmsh1rn1yEMIsHaCe1gp12mAiejsnC448yUX6jtWe',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',

            success: function (data) {

                $("#quotes").html('"' + data.quote + '"');
                $("#author").html(data.author);
                $("#tw").html("<a class=\x22twitter-share-button\x22" +
                    "href=\x22https://twitter.com/intent/tweet?text=" + "'" + data.quote + "'  " + data.author + "\x22" + " " + "target=\x22_blank\x22><i class=\x22fa fa-twitter iconos\x22" + "aria-hidden=\x22true\x22></i></a>");
            }
        });

    };

    frase();

    $("#new").on("click", function () {
        frase();
        console.log(color);
        if (color) {
            $(".par").animate({
                backgroundColor: "black",
            }, 500);

            $(".par").css("color", "white");
            $("#tw").css("color", "white");
            color = false;
        } else {
            $(".par").animate({
                backgroundColor: 'white',
            }, 500);
            $(".par").css("color", "black");
            $("#tw").css("color", "black");
            color = true;
        }
        $("#quotes").animate({
                opacity: 0
            }, 500,
            function () {
                $("#quotes").animate({
                    opacity: 1
                }, 500);

            });
        $("#author").animate({
                opacity: 0
            }, 500,
            function () {
                $("#author").animate({
                    opacity: 1
                }, 500);

            });

    });
});
