$(document).ready(function() {

    $(".description").hide();

    $(".project").click(function() {
        $(this).next($(".description")).toggle();
    });

});


