var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var dragging = false;

var radius = 10;

canvas.width = 850;
canvas.height = 450;

context.lineWidth = radius*2;

var putPoint = function(e){
  if(dragging){
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, radius, 0, 2*Math.PI);
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


var setRadius = function(newRadius){
  if(newRadius < minRad)
    newRadius = minRad;
  else if (newRadius > maxRad)
    newRadius = maxRad;
  radius = newRadius;
  context.lineWidth = radius*2;
  radSpan.innerHTML = radius;
}

var minRad = 0.5;
var maxRad = 40;
var defaultRad = 10;
var interval = 1;
var radSpan = document.getElementById('radVal');
var decRad = document.getElementById('decRad');
var incRad = document.getElementById('incRad');

decRad.addEventListener('click', function(){
  setRadius(radius-interval);
});

incRad.addEventListener('click', function(){
  setRadius(radius+interval);
});

setRadius(defaultRad);



var swatches = document.getElementsByClassName('swatch');
for(var i=0, n=swatches.length; i<n; i++){
  swatches[i].addEventListener('click', function(e){
    var swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className += ' active';
  });
}

function setColor(color){
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if(active){
    active.className = 'swatch';
  }
}
