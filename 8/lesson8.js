////////////////////////////////////AJAX SETUP///////////////////////
// $(document).ready(function(){
//     $.ajaxSetup({
//         url: "https://jsonplaceholder.typicode.com/todos/1",
//         context: $(".content"),
//         statusCode: {
//             404: function(){
//                 alert("Not found");
//             }
//         },
//         success: function(){
//             $(this).text("Done!");
//         },
//         error:function(xhr) {
//             alert(`Error ${xhr.status} error text ${xhr.statusText}`);
//         }
//     });
//     $("button").click(function(){
//         $.ajax();
//     })
// })
///////////////////////////////////////AJAX/////////////////////////////
// $(document).ready(function () {
// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/todos/1",
//     success: function(result){
//         console.log(result);
//         $("h1").text(result.id);
//         $("p").text(result.title)
//     }
// })
///////////////////////////////////////GET///////////////////////////////
// $(".get").click(function(){
//     $.get("https://jsonplaceholder.typicode.com/todos/2",
//         function(data, status) {
//             console.log(status);
//             $("h1").text(data.id);
//             $("p").text(data.title);

//         }
//     )
// })
//////////////////////////////////POST/////////////////////////////////////
//   $(".post").click(function () {
//     $.post(
//       "https://jsonplaceholder.typicode.com/posts",
//       {
//         title: "new Title",
//         body: "body text",
//         userId: "11",
//       },
//       function (data) {
//         console.log(data);
//       }
//     );
//   });
//////////////////////////////DELETE///////////////////////////////
//   $(".delete").click(function () {
//     $.ajax({
//       url: "https://jsonplaceholder.typicode.com/todos/1",
//       type: 'DELETE',
//       success: function (result) {
//         console.log(result);
//       },
//     });
//   });
// });

////////////////////////////////PUT//////////////////////////
// $(document).ready(() => {
//   $(".put").click(() => {
//     $.ajax({
//       url: "https://jsonplaceholder.typicode.com/todos/1",
//       type: "PUT",
//       data: {
//         title: "hello2",
//       },
//       success: function (result) {
//         console.log(result);
//       },
//     });
//   });
// });

