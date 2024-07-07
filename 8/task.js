// $(document).ready(function(){
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/todos/1", 
//             success: function(result){
//                 console.log(result.userId);
//                 $('p').text(result.userId);
//             }
//         })

// })

// Создайте запрос на получение 100 
// постов и отправьте запрос на удаление 10-го поста из списка

// $(document).ready(function(){
//     $('button').click(()=> {
//         $.get("https://jsonplaceholder.typicode.com/users/1/posts", 
//             function(data){
//                 console.log(data.slice(0, 5));
//             }
//         )
//     })

// })
// $(document).ready(()=> {
//     $('.delete').click(()=> {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/users/1/posts", 
//             type: 'DELETE',
//             success: function(data){
//                 console.log(data);
//             }
//         })
//     })
// })