/*
Aufgabe: Aufgabe 7 - OO-Blumenwiese
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 14.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var L7_Klassen;
(function (L7_Klassen) {
    class Firefly {
        constructor(_x, _y) {
            this.fireflyCol = ["#fffacd", "#E3E4FA", "#FFFFFF"];
            console.log("firefly konstruiert");
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            L7_Klassen.crc2.beginPath();
            L7_Klassen.crc2.fillStyle = this.color;
            L7_Klassen.crc2.strokeStyle = this.color;
            L7_Klassen.crc2.moveTo(this.x, this.y);
            L7_Klassen.crc2.arc(this.x, this.y, 5, 0 * Math.PI, 2 * Math.PI);
            L7_Klassen.crc2.shadowColor = "#ffffff";
            L7_Klassen.crc2.shadowBlur = 20;
            L7_Klassen.crc2.shadowOffsetX = 0;
            L7_Klassen.crc2.shadowOffsetY = 0;
            L7_Klassen.crc2.stroke();
            L7_Klassen.crc2.fill();
            L7_Klassen.crc2.closePath();
            L7_Klassen.crc2.fill();
            L7_Klassen.crc2.stroke();
        }
        move() {
            this.x += Math.random() * 3 - 5;
            this.y += Math.random() * 20 - 12;
            if (this.x < 0) {
                this.x = L7_Klassen.crc2.canvas.width;
            }
            if (this.x > L7_Klassen.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = L7_Klassen.crc2.canvas.height;
            }
            if (this.y > L7_Klassen.crc2.canvas.height) {
                this.y = 0;
            }
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = this.fireflyCol[Math.floor(Math.random() * this.fireflyCol.length)];
        }
    }
    L7_Klassen.Firefly = Firefly;
})(L7_Klassen || (L7_Klassen = {})); // Namespace Ende
//# sourceMappingURL=firefly.js.map