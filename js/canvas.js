/**
 * Created by i68066 on 11/9/15.
 */
context = document.getElementById('canvasInAPerfectWorld').getContext('2d');
var canvasDiv = document.getElementById('canvasDiv');
var canvasWidth = '490px';
var canvasHeight = '220px';
canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");
$('#canvas').mousedown (function (e) {
   var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
    paint - true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});
$('#canvas').mousemove(function(e) {
   if (paint) {
       addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
       redraw;
   }
});
$('#canvas').mouseleave(function(e) {
   paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick (x,y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw () {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; i++) {
        contex.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i-1], clickY[i-1]);
        }
        else {
            context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}