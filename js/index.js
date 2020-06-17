arr = []

for (let i = 1; i <= 2; i++) {
    arr.push(i)
}

rev = arr.reverse()

rev.forEach(element => {

    $.get("./posts/" + element + ".md", function(cont) {
        if (cont) {
            let line2 = cont.split('\n')[1];
            let nTitle = line2.replace("#", "").trim()
            document.getElementById("screen").innerHTML +=
                `<div class="linkBox"><a class="links" href="view.html?p=${element}.md">${nTitle}</a></div>`
        }
    });
});