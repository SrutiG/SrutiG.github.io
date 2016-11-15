$(document).ready(function() {

    $(".projdescription").hide();
    var projheight = $(".project").height();
    $(".projdescription").css("height", 2*projheight);

    $(".project").click(function() {
        $(".projdescription").show();
        $(".project").hide();

    });

    $(".projdescription").click(function() {
        $(".project").show();
        $(".projdescription").hide();
    })

});


