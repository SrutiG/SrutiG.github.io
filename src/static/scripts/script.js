$(document).ready(function() {

    $(".projdescription").hide();
    var projheight = $(".project").height();
    $(".projdescription").css("height", 2*projheight);

    $(".project").click(function() {
        var projindex = $(".project").index(this);
        $(".projdescription").eq(projindex).show();
        $(".project").hide();

    });

    $(".projdescription").click(function() {
        var projindex = $(".projdescription").index(this);
        $(".project").show();
        $(".projdescription").eq(projindex).hide();
    })

});


