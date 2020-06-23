arr = []

for (let i = 1; i <= 3; i++) {
    arr.push(i)
}

rev = arr.reverse()

rev.forEach(element => {

    $.get("./posts/" + element + ".md", function(cont) {
        if (cont) {
            let line2 = cont.split('\n')[1];
            let date = (cont.split('\n')[2]).replace("*", "").replace("*", "")
            let nTitle = line2.replace("#", "").trim()
            let first2 = `<span class="white">${nTitle.substring(0,5)}</span>` + nTitle.substring(5) + ` <br> <div class="date">${date}</div>`
            document.getElementById("screen").innerHTML +=
                `<a class="links" href="view.html?p=${element}"><div class="linkBox">${first2}</div></a>`
        }
    });
});