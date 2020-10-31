arr = []

for (let i = 1; i <= 2; i++) {
    arr.push(i)
}

rev = arr.reverse()
let p = 1
rev.forEach(element => {
    $.get("./posts/" + element + ".md", function(cont) {
        if (cont) {
            let line2 = cont.split('\n')[1];
            let date = (cont.split('\n')[2]).replace("*", "").replace("*", "")
            let nTitle = line2.replace("#", "").trim()
            let first2 = nTitle + ` <br> <div class="date">${date}</div>`
            document.getElementById("screen").innerHTML +=
                `<a class="links" href="./p/${element}.html"><div class="linkBox">
                <img class="cov" src="./capas/${p}-capa.png"><br>
                ${first2}
                </div></a>`
        }
        p++
    });
});