'use strict';


let story = ("story0.txt");

$("#story").load(story);



$("nav div").click(function () {
    $(this).find(".submenu").toggle();
});


