function onload() {
    const path = "https://hackbras.github.io/codeista/model/" + languageSelected + ".json";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", path, true);

    xhttp.onload = function() {
        const ourData = JSON.parse(xhttp.responseText);
    }
    xhttp.send();

    portifolio();

}