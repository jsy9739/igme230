'use strict';


$("nav div").click(function () {
    $(this).find(".submenu").toggle();
});

//let var = $;

$("nav div").click(function () {
    $(this).attr(“id”).toggle();
    event.trigger.id.toggle();
    this.id.toggle();
});

$(document).ready(function(){
     $("#story").load("story0.txt"); //load site last updated text
});

$(function(){
    $( "#story" ).load( "story0.txt" );
});

$("#story").load("story0.txt");
