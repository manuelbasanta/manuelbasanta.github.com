
$(document).ready(function () {
    $("#trabajos").hide();
    $("#habi").hide();
    $("#forma").hide();
    $("#contacto").hide();
    $("#t").click(function () {
       $("#trabajos").toggle("fast"); 
    });
    $("#h").click(function () {
       $("#habi").toggle("fast"); 
    });
    $("#f").click(function () {
       $("#forma").toggle("fast"); 
    });
    $("#c").click(function () {
       $("#contacto").toggle("fast"); 
    });
    
});