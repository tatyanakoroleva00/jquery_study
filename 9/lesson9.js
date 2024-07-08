//$.grep - метод для работы с данными

// $(document).ready(function(){
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     arr = $.grep(arr, function(n, i){
//         return (n != 5 && i > 4);
//     })
//     $('.grep').text(arr);
// })


//$.inArray - метод для поиска данных в массиве
// $( document ).ready(()=> {
//     let arr = ["JQuery", "PHP", "JS"];
//     let li = $("li");
//     li.eq(0).text($.inArray("React", arr)); //-1, нет таких данных
//     li.eq(1).text($.inArray("PHP", arr));
//     li.eq(2).text($.inArray("JS", arr));

//     //Представляем li, как массив с li
//     console.log(li);
//     let elemArr =  $.makeArray(li);
//     console.log(elemArr);
//     console.log($.isArray(elemArr));
// })

//Работа с объектами, объединение в один объект
// $( document ).ready(()=> {
//     let userA = {
//         name : "Alex", 
//         age :  13,
//     };
//     let userAinfo = {
//         score: 150, 
//         languages: "English",
//     };
//     let user = $.extend(userA, userAinfo);
//     console.log(user);
// })

// $(document).ready(() => {
//     let li = $("li");
//     let indexEl = $(".index");
//     let a = $(".index-val").text(li.index(indexEl));
//     console.log(a);
// })

// $(document).ready(function(){
//     let block = $('div');
//     console.log(block.data());

//     $(".set").click(()=> {
//         block.data("position", 10);
//     })
//     $(".get").click(()=>{
//         block.removeData("position");
//         alert(block.data("position"));
//     })
// })

////////////////////////////$.noConfilct()////////////////////////////////////
    // let jQ = $.nonConflict();
    // jQ(document).ready(()=> {})
