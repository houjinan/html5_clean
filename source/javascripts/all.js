//= require_tree .
function drawDiagonal(){
  var canvas = document.getElementById('diagonal');
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(0, 140);
  context.lineTo(140, 70);


  var trunkGradient = context.createLinearGradient(0, 0, 25, 50);
  trunkGradient.addColorStop(0, '#663300');
  trunkGradient.addColorStop(0.5, '#996600');
  trunkGradient.addColorStop(1, '#552200');

  context.fillStyle = trunkGradient;
  context.fillRect(0, 0, 50, 100);

  var canopyShadow = context.createLinearGradient(100, 100, 0, 0);
  canopyShadow.addColorStop(0, 'rgba(0,0,0,0.5)');
  canopyShadow.addColorStop(0.2, 'rgba(0,0,0,0.0)');
  context.fillStyle = canopyShadow;
  context.fillRect(120, 120, 20, 20);

  context.stroke();
}

function drawTranslate(){
  var canvas_translate = document.getElementById('diagonal_translate');
  var context = canvas_translate.getContext('2d');
  context.lineWidth = 4;
  context.lineJoin = "round";
  context.strokeStyle = "#663300";
  context.fillStyle = "#339900";


  context.fillRect(-5, -50, 10, 50);

  context.save();
  context.translate(0, 0);
  // context.fillStyle = "#339900";
  context.fillRect(0, 50, 10, 50);

  context.beginPath();
  context.moveTo(80, 10);
  context.lineTo(50, 20);
  context.lineTo(60, 30);
  context.lineTo(70, 70);

  context.closePath();

  context.fill();
  context.stroke();
  context.restore();


  context.save();
  context.translate(-10, 200);
  context.beginPath();
  context.moveTo(0 ,0 );
  context.quadraticCurveTo(200, -50, 200, -190);
  context.strokeStyle = "#663300";
  context.lineWidth= 20;
  context.stroke();
  context.restore();

  var head = new Image();
  head.src = "/images/head.png";
  head.onload = function () {
    context.drawImage(head, 50, 50, 100, 100);
  }
}

window.addEventListener("load", drawDiagonal, true);
window.addEventListener("load", drawTranslate, true);
window.addEventListener("load", isExistVideo, true);

function isExistVideo(){
  var hasVideo = !!(document.createElement('video').canPlayType);
  //alert(hasVideo);
}


function getGeolocation(){
  if(navigator.geolocation){
    document.getElementById("support").innerHTML ="HTML5 Geolocation supported."
    navigator.geolocation.watchPosition(updateLocation, handleLocationError, {maximumAge: 2000});
  }else{
    document.getElementById("support").innerHTML ="HTML5 Geolocation is not supported in your browser."

  }
}

function updateLocation(position){
  alert("aa");
  var latitude = position.coords.latitude;
  var longitude = postion.coords.longitude;
  var accuracy = postion.coords.accuracy;

  document.getElementById("latitude").innerHTML = latitude;
  document.getElementById("longitude").innerHTML = longitude;
  document.getElementById("accuracy").innerHTML = "This location is accuracy within " + accuracy + " meters";
}

function handleLocationError(error){
  switch(error.code){
    case 0:
      updateStatus("There was an error while retrieving your location: " + error.message);
    break;
    case 1:
      updateStatus("The user prevented this page from retrieving a location.");
    break;
    case 2:
      updateStatus("The browser was unable to datermine your location: " + error.message);
    break;
    case 3:
      updateStatus("The browser timed out before retrieving the location.");
    break;
  }
}

function updateStatus(message){
  document.getElementById("status").innerHTML = message;
}