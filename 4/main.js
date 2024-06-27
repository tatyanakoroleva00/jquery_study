$(document).ready(function () {
    // $("h1").addClass('title uppercase');
    // $("h2").addClass('uppercase');
    // $("h1").removeClass('title');
    // $("h3").removeClass('remove');
    // $("h3").removeClass('title new');
    let n = 3;
    // $("h3").removeClass(function(){
    //     n > 0 ? "title" : "remove";
    //     if (n > 0) return "remove";
    //     else return "new";
    // })
    // $("button").click(function(){
    //     // $("button").toggleClass("active", true); 
    //     //По клику, класс активизируется, но 1 раз появится, если его не было. 
    //     $("button").toggleClass("active", false);
    //     //По клику, класс уберется. 1 раз. И больше не восстановится. 

    // })
    // $("button").click(function() {

    //     $("button").toggleClass(function(){
    //         if (n > 0) { 
    //             return "remove"
    //         };
    //         return "new";
    //     })
    // })
    // let titleH = $("h3");
    // if (titleH.hasClass("remove")) {
    //     titleH.removeClass("remove");
    // }

        // $(".block").css("background", "blue");
        // $(".block").css({
        //     "background" : "blue", 
        //     "color" : "white", 
        //     "font-size" : "12px",
        // })

        // $(".block").height(400);
        // $(".block").width(400);
        // $(".block").text($(".block").width()); 

        // let positionBlock = $(".block").position();
        // $(".block").text(`T:${positionBlock.top} L:${positionBlock.left}`);

        // let imgAttr = $("img").attr("src");
        // $("block").text(imgAttr);
        $("img").attr("alt", "this img"); 
}) 