function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

let post = getURLParameter('p');

$.get("./posts/" + post, function(response) {
    let converter = new showdown.Converter({ tables: true, strikethrough: true });
    let text = response
    let html = converter.makeHtml(text);
    document.getElementById("screen").innerHTML += html
})