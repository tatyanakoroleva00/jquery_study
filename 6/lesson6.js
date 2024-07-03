// $(document).ready(function(){
    // $(".blur").blur(function(){
    //     if ($(this).val().length === 0) {
    //         $(".blur-text").text("Input value 0")
    //     } else {
    //         $(".blur-text").text(`${$(this).val()}`);
    //     }
    // })
    // $("form").change(function(){
    //     alert("Form data changed!");
    // })
    // $("form").focusin(function(){
    //     $("form").css({
    //         "background" : "yellow",
    //     })
    // })
    // $("form").focusout(function(){
    //     $("form").css({
    //         "background" : "white",
    //     })
    // })
    // $("input, textarea").select(function(){
    //     $(".warning").text("Selected text");
    //     $(this).css({
    //         "background" : "red",
    //     })
    // })
    // $("form").submit(function(){
    //     alert("Form submit");
    // })
//     $("form").submit(function(e){
//         e.preventDefault();
//         console.log($("form").serialize()); 
//     })
    // $("form").submit(function(e){
    //     e.preventDefault();
    //     $(".focus").val("null value");
    //     console.log($("form").serializeArray());
    // })
// })

$(document).ready(function(){
    let overlay = $(".overlay");
    let username = $("input[name='username']");
    let password = $("input[name='password']");

    function isValid(element, validValue) {
        if (element.val().length > validValue) {
            element.removeClass("error");
            return true
        } else {
            element.addClass("error");
            return false;
        }
    }
    $("form").on("submit", function(e) {
        if(isValid(username, 3) && isValid(password, 6)) {
            e.preventDefault();
            overlay.removeClass("error");
            alert("Login!");
        } else {
            e.preventDefault();
            overlay.addClass("error");
            alert("Error!");
        }
    })
})