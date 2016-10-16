$(document).ready(function() {

    var gpa = null;
    var heightbool = true;
    $(".gpa-title").after("<h3 style='color:#fff' class='gpa-calculated'><h3>");
    $(".class-input").map(function() {
        var pos = $(".class-input").index(this) + 1;
        $(this).attr("placeholder", "Class " + pos);
    });
    $(".grade-input").map(function() {
        $(this).attr("placeholder", "A, B, C, D, F");
    });
    $(".creds-input").map(function() {
            $(this).attr("placeholder", "Integer (1-10)");
    });



    $("#gpa-form").on('click', '#add-class', function() {
        var newDiv = $(".class-info")[0].outerHTML;
        $("#add-class").before(newDiv);
        var posNum = $(".class-info").length;
        $(".class-input:last").attr("placeholder", "Class " + posNum);
        var inc = $(".class-info").height();
        //inc +=15;
        $("#myCarousel").height("+=" + inc);

    });

    $("#gpa-form").on('click', '#calculate', function() {
        var gradeDict = {"A":4.0, "B":3.0, "C":2.0, "D":1.0, "F":0.0};
        var numElements = $(".grade-input").length;
        var grades = $(".grade-input").map(function() {return $(this).val()}).get();
        var creds = $(".creds-input").map(function() {return $(this).val()}).get();
        var gXc = 0;
        for (x=0; x < numElements; x++) {
            if (grades[x] != "" && creds[x] != "") {
                gXc += gradeDict[grades[x]] * creds[x];
                creds[x] = parseInt(creds[x]);
            }
        }
        var sum = creds.reduce((a, b) => a + b, 0);
        console.log(gXc);
        console.log(sum);
        gpa = gXc/sum;
        gpa = gpa.toFixed(2);
        console.log(gpa);
        $(".gpa-calculated").html("<h3 style='color:#fff' class='gpa-calculated'>GPA: " + gpa + "<h3>");
        if (heightbool) {
            var gpaHeight = $(".gpa-calculated").height();
            gpaHeight += 15;
            $("#myCarousel").height("+=" + gpaHeight);
        }
        heightbool = false;


    });
});