function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

let post = getURLParameter('p');
let spotify = getURLParameter('s');

$.get("./posts/" + post, function(response) {
    let converter = new showdown.Converter({ tables: true, strikethrough: true });
    let text = response
    let html = converter.makeHtml(text);
    document.getElementById("screen").innerHTML +=
        `
    <iframe style="margin: 30px auto 0 auto;" src="https://open.spotify.com/embed-podcast/episode/${spotify}" width="334" height="152" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `
    document.getElementById("screen").innerHTML += html
})