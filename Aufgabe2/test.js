/*
Aufgabe: Aufgabe 2a: Dynamic HTML
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 02.04.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde zusammen mit Alfred Müller und mit Hilfestellung von Moritz Giuliani erstellt.
*/
document.addEventListener("DOMContentLoaded", function () {
    console.log("test");
    let board = document.createElement("section");
    document.body.appendChild(board);
    for (var i = 0; i < 64; i++) {
        let field = document.createElement("div");
        board.appendChild(field);
        let rice = Math.pow(2, i);
        field.innerText = "" + rice;
        console.log(i);
    }
});
//# sourceMappingURL=test.js.map