var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var square = 45;
var padding = 20;

for (var squareCounter = 0; squareCounter < 10; squareCounter++) {
  context.fillStyle = "rgba(255,165,0,.5)";
  context.fillRect(padding,padding,square,square);
  padding += square / 2;
}

var size = 50;
var padding = 5;

for (rowCounter = 0; rowCounter < 5; rowCounter++) {
    var positionX = 15;
    var positionY = 15;
    for (var squareCounter = 0; squareCounter <= rowCounter; squareCounter++) {
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fillRect(positionX + squareCounter * (size + padding), positionY + rowCounter * (size + padding), size, size);
    }
}

var size = 30;
var positionY = 50;
var padding = 5;

var red = 255;
var green = 79;
var blue = 120;

for (var rowCounter = 0; rowCounter < 6; rowCounter++) {
    var positionX = 125;
    for (var squareCounter = 0; squareCounter < 6; squareCounter++) {
        context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        context.fillRect(positionX, positionY, size, size);
        red -= 7;
        positionX += size + padding;
    }
    blue += 15;
    positionY += size + padding;
}

var position = 120;
var size = 100;
var padding = 5;

for (triangleCounter = 0; triangleCounter < 30; triangleCounter++) {
    context.beginPath();
    context.moveTo(position + triangleCounter * padding, position + triangleCounter * padding);
    context.lineTo(position + size + triangleCounter * padding, position + triangleCounter * padding);
    context.lineTo(position + size / 2 + triangleCounter * padding, position - size + triangleCounter * padding);
    context.lineTo(position + triangleCounter * padding, position + triangleCounter * padding);
    context.strokeStyle = 'grey';
    context.stroke();
}

//Ezt követő kódot vegyük ki a többi láthatóságához.
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var rectWidth = canvasWidth;
var rectHeight = canvasHeight;

var positionX = 0;
var positionY = 0;

var hue = 360;
var saturation = 60;
var lightness = 45;

for (var rectCounter = 0; rectCounter < 17; rectCounter++) {
    context.fillStyle = 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
    context.fillRect(positionX, positionY, rectWidth, rectHeight);
    hue -= 360 / 17;
    positionX += 10;
    positionY += 10;
    rectWidth -= 20;
    rectHeight -= 20;
}