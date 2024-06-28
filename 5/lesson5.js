// $(document).ready(function(){
//     //DOM is ready
// })
// $(window).on("load", function(){
//     //.on(event, [data], handler)
//     $("#first").on("click", function(){
//         $("#second").trigger("click"); //Как будто щелкаем и по второй кнопке
//     });
//     $("#second").on("click", function(){
//         alert("Hello event");
//     })
//     $("#first").on({
//         click:function(){},
//         mouseover:function(){},
//         mouseout:function(){}
//     })

// })

// $(window).on("load", function(){
//     // $(".keydown, .keypress, .keyup").css({
//     //     "background" : "lightblue"
//     // })
//     // $(".keydown").keydown(function(){
//     //     $(".keydown").css({
//     //         "background": "yellow"
//     //     })
//     // })
//     // $(".keypress").keydown(function(){
//     //     $(".press-value").text($(".keypress").val());
//     // })
//     // $(".keydown").keyup(function(){
//     //     $(".keydown").css({
//     //         "background" : "lightgray"
//     //     })
//     // })
// })

// let i = 0;
// let db = 0;
// $(window).on("load", function(){
    // $(".click").on("click", function(){
    //     $(".click span").text(i++);
    // })
    // $(".dbClick").on("dblclick", function(){
    //     $(".dbClick span").text(db++);
    // })
    // $(".hover").hover(
    //     function(){
    //         $(this).css("background", "yellow")
    //         $(this).addClass("yellow");
    //     },
    //     function(){
    //         $(this).css("background", "white")
    //         $(this).removeClass("yellow");
    //     }
        
    // )
    // $("#focus").focus(function(){
    //     $(this).css("background","green");
    // })
    // $(".area-block").mouseup(function(){
    //     $(this).text("Mouse up");
    // })
    // $(".area-block").mousedown(function(){
    //     $(this).text("Mouse down");
    // })

    // $(document).mousemove(function(e){
    //     $(".area-block>p").text(`X: ${e.pageX} Y:${e.pageY}`)
    // })

//     $(window).resize(function(){
//         let w = $(window).width();
//         let h = $(window).height();
//         $(".windows-block").text(`Windows w:${w} h:${h}`);
//     })
//     $(".scroll").scroll(function(){
//         $(this).css("background", "pink");
//     })
