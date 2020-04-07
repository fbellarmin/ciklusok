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