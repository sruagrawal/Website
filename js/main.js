var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var dragging = false;

canvas.width = 850;
canvas.height = 450;

context.lineWidth = 10;

var putPoint = function(e){
  if(dragging){
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, 5, 0, 2*Math.PI);
    context.fill();
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
  }
}

var engage = function(){
  dragging = true;
}

var disengage = function(){
  dragging = false;
  context.beginPath();
}
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
