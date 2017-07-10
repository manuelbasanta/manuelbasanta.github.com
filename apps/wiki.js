$(document).ready(function () {
     $("#rand").mouseover(function () {
         $("#icon").css("color", "white");
         $("#icon").css("display", "block");
     });

     $("#rand").mouseleave(function () {

         $("#icon").css("display", "none")
     });
     $("#results").on("click", ".todo", function () {

         $(this).children(".desc:visible").hide("fast");
         $(this).children(".desc:hidden").show("fast");


     });

     var form = document.getElementById("search");

     form.onsubmit = function () {
         $("#results").html("");
         $("#results").toggle("slow");
         $("#img").show();

         var http = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + form.aca.value + "&limit=5&namespace=0&format=json";
         $.ajax({
             url: http,
             cache: false,
             success: function (json) {
                 $("#img").hide();
                 if (json[1].length == 0) {
                     $("#results").html("No results")
                     $("#results").fadeIn("slow");
                 } else {
                     for (var i = 0; i < json[1].length; i++) {
                         $("#results").append("<div class=\"todo\"><div class=\"tado\">" + json[1][i] + "</div><div class=\"desc\">" + json[2][i] + "<a target=\"_blank\"href=\"" + json[3][i] + "\"><div class=\"bot\"> Go to article </div></a></div></div>");
                     }
                     $("#results").fadeIn("slow");
                 }
             }

         });


     };



 });
