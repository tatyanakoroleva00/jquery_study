$(document).ready(function(){
    $("#firstList").wrap("<div class='wrap-around-firstList'></div>");
    $('.list span').text("Task 3");
    $('#firstList li').slice(2, 5).text("Chosen elements");
})