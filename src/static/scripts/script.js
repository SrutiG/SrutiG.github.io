$(document).ready(function() {

    var projheight = $(".project").height();
    $(".projdescription").css("height", 2*projheight);
    $(".proj-text").css("height", 1.5*projheight);
    $(".proj-img").css("height", 1.5*projheight);
    $(".project").map(function() {
        var projindex = $(".project").index(this);
        var images = $(".projdescription").eq(projindex).find(".proj-img");
        var height = images.height();
        var imageContainers = $(".projdescription").eq(projindex).find(".proj-images");
        var imgHeight = imageContainers.height();
        var diff = height-imgHeight;
        if (diff > 20) {
            images.css("padding-top", diff/2);
            images.css("padding-bottom", diff/2);
        }
    });
    $(".projdescription").hide();


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


