$(document).ready(function(){
    $("p").first().addClass("block-yellow");
    // $("p").has("span").addClass("hide");
    let paragraph = $("p").removeClass("hide");
    paragraph.addClass("block-blue");
    let img = $("img");
    img.attr({
        width: "500",
        height: "500", 
        alt: 'true',
        src: "hello",
    })
})