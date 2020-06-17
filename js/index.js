$.ajax({
    url: 'posts',
    method: 'GET',
    dataType: 'json'
}).done(function(data) {
    arr = data.reverse()
    arr.forEach(element => {
        $.ajax({
            url: 'posts/' + element,
            method: 'GET',
        }).done(function(cont) {
            let line1 = cont.split('\n')[0];
            let nTitle = line1.replace("#", "").trim()
            document.getElementById("screen").innerHTML +=
                `<a class="links" href="view.html?p=${element}">${nTitle}</a>`
        });
    });
});