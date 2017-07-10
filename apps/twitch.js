$(document).ready(function () {


    var channels = ["freecodecamp", "alexiaraye", "gamesdonequick", "animeexpo", "esportnow", "schyax", "tarababcock", "sheevergaming","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "dooleynotedgaming"];
    
    channels.forEach(function (channel) {
        var http = 'https://api.twitch.tv/kraken/streams/' + channel;

        function ajaxero(callback) {
            $.ajax({
                type: 'GET',
                url: http,
                headers: {
                    'Client-ID': 'gq2ekraoz2g2ax5xqnb7j2q21th5wk'
                },
                success: function (data) {
                    callback(data)
                }
            });

        }
        ajaxero(function (data) {
            console.log(data);
            $("#todos").append("<div class=\"box\" id=\"box" + channel + "\">" + "<a href=\"https://www.twitch.tv/" + channel + "\" target=\"_blank\">" + "<div class=\"int\" id=\"" + channel + "\">Loading...</div>" + "</a>" + channel + ".</div>");


            if (data.stream == null) {
                $('#' + channel).html("Offline");
                $('#box' + channel).addClass('off');
            } else {
                $('#' + channel).html(data.stream.game);
                $('#box' + channel).addClass('on');
            }
             
            $(".off").find('div').css("background-color", "#f96d6d");
            $(".on").find('div').css("background-color", "#73ce87");
            $("#" + channel).hide();
            
            $(".box").mouseover(function () {
                $(this).find('div').fadeIn("fast");
            });
            $(".box").mouseleave(function () {
                $(this).find('div').fadeOut("fast");
            });

            $("#all").click(function () {
                $(".off").show();
            });
            $("#only").click(function () {
                $(".off").hide();
            });
        });

    });


});
