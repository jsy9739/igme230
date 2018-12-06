/* Don't use <script> tags in a linked js file! */

'use strict';

// Get the button, and when the user clicks on it, gets the children and executes function
$(".menubox").click(function () {
    $(this).find(".submenu").toggle();
})

//AJAX
//initialize variable "content" with the text
let content = ("content1.txt");

//select content menu and get its value which the variable you inialized
$("#choose-content").val(content);

//load the text
$("#content").load(content);

//choose the other option by changing the value of content then loading it
$("#choose-content").change(function () {
    content = $(this).val();
    $("#content").load(content);
});
