'use strict';


$("nav div").click(function () {
    $(this).find(".list").toggle();
});


let content = ("article0.txt");


$("#story").val(content);


$("#story").load(content);


$("#story").change(function () {
    content = $(this).val();
    $("#content").load(content);
});
