$(window).on("load", function(){
    //Additional exercice
    $(window).resize(function(){
                let w = $(window).width();
                let h = $(window).height();
                $(".resize-div span").text(`Windows w:${w} h:${h}`);
            })
    let i = 100;
    //Exercice 1
    $(".image-btn").on("click", function(){
        let h = $("img").height();
        let w = $("img").width();
        $(".img-block img").css({
            "width": `${w + i}`, 
            "height": `${h + i}`,
        })
    })
    //Exercice 2
    $(".body-btn").on("click", function(){
        $("body").css("background", "darkgrey")
    })
    $("body").keyup(function(){
        $("body").css({
            "background" : "white",
        })
    })

    //Exercice 3
    $(".hover-btn").hover(
        function(){
            $(".hover-btn").css({
                "background" : "yellow", 
                "border" : "1px solid black", 
                "cursor" : "pointer"
            })
        },
        function(){
            $(".hover-btn").css({
                "background" : "lightblue"
            })
        }
    )
})