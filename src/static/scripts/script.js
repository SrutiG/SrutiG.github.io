$(document).ready(function() {

    $(".projdescription").hide();

    $(".project").click(function() {
        $(".projdescription").show();
        $(".project").hide();

    });

    $(".projdescription").click(function() {
        $(".project").show();
        $(".projdescription").hide();
    })

});


