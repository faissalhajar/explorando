// $.ajax({
//     url: 'https://explorando.now.sh/posts',
//     method: 'GET',
//     dataType: 'json'
// }).done(function(data) {
//     arr = data.reverse()
//     arr.forEach(element => {
//         $.ajax({
//             url: 'https://explorando.now.sh/posts/' + element,
//             method: 'GET',
//         }).done(function(cont) {
//             let line1 = cont.split('\n')[0];
//             let nTitle = line1.replace("#", "").trim()
//             document.getElementById("screen").innerHTML +=
//                 `<a class="links" href="view.html?p=${element}">${nTitle}</a>`
//         });
//     });
// });

$.get("./posts", function(response) {
    console.log(response)
})