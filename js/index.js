arr = []

for (let i = 1; i <= 10; i++) {
    arr.push(i)
}

arr.forEach(element => {

    $.get("./posts/" + element + ".md", function(cont) {
        if (cont) {
            let line2 = cont.split('\n')[1];
            let spotify = (cont.split('\n')[0])
            let trimSpot = spotify.substring(5, (spotify.length - 4));
            let nTitle = line2.replace("#", "").trim()
            document.getElementById("screen").innerHTML +=
                `<a class="links" href="view.html?p=${element}.md&s=${trimSpot}">${nTitle}</a>`
        }
    });
});