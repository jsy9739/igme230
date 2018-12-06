'use strict';


$("nav div").click(function () {
    $(this).find(".list").toggle();
});


let article = ("article0.txt");


$("#story").val(article);


$("#article").load(article);


$("#story").change(function () {
    article = $(this).val();
    $("#article").load(article);
});

$("extracredit").click(function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
});
