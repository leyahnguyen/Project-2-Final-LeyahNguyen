//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {
    $("#Info1").hide();
    $("#Info2").hide();
    $("#Info3").hide();

    $("#Fun-Facts").click(function(){
        $("#Info1").toggle();
        $("#Info3").hide();
        $("#Info2").hide();
    });

    $("#Threats").click(function(){
        $("#Info2").toggle();
        $("#Info3").hide();
        $("#Info1").hide();
    });

    $("#How-Help").click(function(){
        $("#Info3").toggle();
        $("#Info2").hide();
        $("#Info1").hide();
    });

    $("#ClickMe").click(function(){
        $(".manatee").animate({
            width: "150px",
        });
    });



});
