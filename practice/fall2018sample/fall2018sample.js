/* Don't use <script> tags in a linked js file! */

'use strict';

// Get the button, and when the user clicks on it, gets the children and executes function
$(".menubox").click(function () {
    $(this).find(".submenu").toggle();
})

//AJAX
let content = ("content1.txt");
$("#choose-content").val(content);
$("#content").load(content);

$("#choose-content").change(function () {
    content = $(this).val();
    $("#content").load(content);
});


/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("submenu");
}
