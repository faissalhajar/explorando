arr = []

for (let i = 1; i <= 2; i++) {
    arr.push(i)
}

arr.forEach(element => {

    $.get("./posts/" + element + ".md", function(cont) {
        if (cont) {
            let line1 = cont.split('\n')[0];
            let nTitle = line1.replace("#", "").trim()
            document.getElementById("screen").innerHTML +=
                `<a class="links" href="view.html?p=${element}.md">${nTitle}</a>`
        }
    });
});