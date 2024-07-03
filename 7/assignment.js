$(document).ready(()=>{
    // $("#btn").click(() => {
    //     $("img").slideToggle();
    // })
    $("#btn").click(()=>{
        $("img").animate({
            width: "500px",
        }), "slow"
    })

    $("#btn").click(()=>{
        $("img").animate({
            width: "300px",
        }), "slow"
    })

    $("#btn").click(()=>{
        $("img").animate({
            height: "400"
        }), 3000
    })
    $("#stop-btn").click(()=> {
        $("img").stop();
    })
})