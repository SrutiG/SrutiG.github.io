$(document).ready(function() {
    var checkLoad = false;
    var projheight = $(".project").height();
    $(".projdescription").css("height", 2*projheight);
    $(".proj-text").css("height", 1.5*projheight);
    $(".proj-img").css("height", 1.5*projheight);
    $(".projdescription").hide();

    function loaded() {
        checkLoad = true;
        alert(checkLoad);
    }

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


