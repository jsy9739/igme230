'use strict';


$("nav div").click(function () {
    $(this).find(".list").toggle();
});


let content = ("article0.txt");


$("#story").val(content);


$("#content").load(content);


$("#story").change(function () {
    content = $(this).val();
    $("#content").load(content);
});

$("extracredit").click(function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
});
