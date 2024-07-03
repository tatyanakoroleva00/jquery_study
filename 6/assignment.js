$(document).ready(function(){
    // $("form").serializeArray();
    
    // $("input[name='name']").change(()=>{
    //     $("#input-text").text(`${$("input[name='name']").val()}`);
    // })

    let name = $("#name");
    let age = $("#age");
    let textarea = $("#text-field");

    // $("#name").focusout(function(e){
    //     if (name.val().length === 0) {
    //         e.preventDefault();
    //         $("#input-text").text("Enter a name");
    //     }
    // })

    name.focusin(function(){
        name.addClass("red");
    })

})