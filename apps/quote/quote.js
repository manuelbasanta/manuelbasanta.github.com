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

                $("#quotes").html('"' + data[0].quote + '"');
                $("#author").html(data[0].author);
                $("#tw").html("<a class=\x22twitter-share-button\x22" +
                    "href=\x22https://twitter.com/intent/tweet?text=" + "'" + data[0].quote + "'  " + data[0].author + " -- Created with https://manuelbasanta.github.io/apps/quote/quote.html\x22" + " " + "target=\x22_blank\x22><i class=\x22fa fa-twitter iconos\x22" + "aria-hidden=\x22true\x22></i></a>");
                
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
                    opacity: 1
                }, 500);


                $("#author").animate({
                    opacity: 1
                }, 500);

            }
        });

    };

    frase();

    $("#new").on("click", function () {
        $("#author").animate({
                opacity: 0
            }, 500);
        $("#quotes").animate({
                opacity: 0
            }, 500);
        frase();
    });
});
