$(document).ready(function () {


    function frase() {

        $.ajax({
            headers: {
                'X-Mashape-Key': 'b9e7wMaBcVmsh1rn1yEMIsHaCe1gp12mAiejsnC448yUX6jtWe',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',

            success: function (data) {

                
                $("#tw").html("<a class=\x22twitter-share-button\x22" +
                    "href=\x22https://twitter.com/intent/tweet?text=" + "'" + data.quote + "'  " + data.author + "\x22" + " " + "target=\x22_blank\x22><i class=\x22fa fa-twitter iconos\x22" + "aria-hidden=\x22true\x22></i></a>");
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
            $("#quotes").html('"' + data.quote + '"');
                $("#author").html(data.author);
                $("#author").animate({
                    opacity: 1
                }, 500);

            });
            }
        });

    };

    frase();

    $("#new").on("click", function () {
        frase();


    });
});
