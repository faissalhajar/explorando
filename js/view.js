// function getURLParameter(name) {
//     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
// }

let post = (window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)).replace(".html", "")

$.get("../posts/" + post + ".md", function(response) {
    let converter = new showdown.Converter({ tables: true, strikethrough: true });
    let text = response
    let line2 = response.split('\n')[1];
    let nTitle = line2.replace("#", "").trim()
    let html = converter.makeHtml(text);
    let spotify = (text.split('\n')[0])
    let trimSpot = spotify.substring(5, (spotify.length - 4));
    document.getElementById("herospot").innerHTML +=
        `
        <style>
        .hero {
            background-image: url(../capas/${post}-capa.png)
        }
        </style>
<div class="hero enableBlur"></div>
<div class="herot disableBlur">${nTitle}</div>
`
    document.getElementById("screen").innerHTML +=
        `
<iframe style="margin: 30px auto 0 auto;" src="https://open.spotify.com/embed-podcast/episode/${trimSpot}" width="234" height="152" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

`
    document.getElementById("screen").innerHTML += html

})