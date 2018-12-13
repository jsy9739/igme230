'use strict';


let story = ("story0.txt");

$("#story").load(story);
//
//$(document).ready(function(){
//    $("nav div").click(function(){
//        $(".submenu").toggle();
//    });
//});


$("nav div").click(function () {
    $(this).find(".submenu").toggle();
});

//
////let var = $;
//
//$("nav div").click(function () {
//    $(this).attr(“id”).toggle();
//    event.trigger.id.toggle();
//    this.id.toggle();
//});

//$(document).ready(function(){
//     $("#story").load("makeup4/story0.txt"); //load site last updated text
//});
//
//$(function(){
//    $( "#story" ).load( "makeup4/story0.txt" );
//});
