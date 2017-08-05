    $(document).ready(function () {
        $("#centro").fadeIn(1000);
        $("#guardar").click(function () {
            $(".pop").show("fast");
        });
        $(".cerrar").click(function () {
            $(".pop").css("display","none");
        });
        
        $(".date").click(function () {
            window.location.href = "nuevorecordatorio.html"
        });
        
        // transporte
        $(".fa-train").click(function () {
            $(".fa-car").removeClass("selected");
            $(".fa-bus").removeClass("selected");
            $(".fa-train").addClass("selected");
            $("#colec").css("display","none");
            $("#auto").css("display","none");
            $("#tren").css("display","inline");
        });
        $(".fa-bus").click(function () {
            $(".fa-car").removeClass("selected");
            $(".fa-bus").addClass("selected");
            $(".fa-train").removeClass("selected");
            $("#auto").css("display","none");
            $("#tren").css("display","none");
            $("#colec").css("display","inline");
        });
        $(".fa-car").click(function () {
            $(".fa-car").addClass("selected");
            $(".fa-bus").removeClass("selected");
            $(".fa-train").removeClass("selected");
            $("#tren").css("display","none");
            $("#colec").css("display","none");
            $("#auto").css("display","inline");
        });
        
        $(".libondiok").click(function () {
            $("#bondiok").show("fast");
        });
        $(".libondim").click(function () {
            $("#bondim").show("fast");
        });
        $("#libondimal").click(function () {
            $("#bondimal").show("fast");
        });
        $(".bicimal").click(function () {
            $("#bicimal").show("fast");
        });
    });