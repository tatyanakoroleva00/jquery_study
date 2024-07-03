$(document).ready(function(){
    //  $(".simple").click(function(){
    //     $(".animate").animate({
    //         width: "0",
    //     }, 50000)
    //  })
     $(".simple").click(function(){
        $(".animate").delay(2000).animate({
            opacity : "0.1"
        })
     })
})