'use strict';


let story = ("story0.txt");

$("#story").load(story);



$("nav div").click(function () {
    $(this).find(".submenu").toggle();
});


//$(this).attr("id");
//
//$("#content").load(content);
//
//$("#choose-content").change(function () {
//    content = $(this).val();
//    $("#content").load(content);
//});

//var x = 0;
////$(document).ready(function () {
////            $("#increment").click(function ()) {
//
//$("#currentcount").load(function (x = x + 1{
//
//});
//let increment =
//
//var incrementPlus;
//
//let buttonPlus  = $(".increment");
//
//var incrementPlus = buttonPlus.click(function() {
//	var $n = $(this)
//		.parent("#extracredit")
//		.find("#currentcount");
//	$n.val(Number($n.val())+1 );
//});

var click = 0;
$("#currentcount").text(click);

$("#increment").click(function(){
    click++;
    $("#currentcount").text(click);
})
