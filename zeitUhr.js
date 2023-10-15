var auto_refresh = setInterval(function() {zeit();}, 1);

var auto_refresh2 = setInterval(function() {setClock();}, 1);

var hourHand = document.querySelector("[hour-hand]")
var minuteHand = document.querySelector("[minute-hand]")
var secondHand = document.querySelector("[second-hand]")
var millisecondHand = document.querySelector("[millisecond-hand]")

function zeit(){
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();
    var millisecond = new Date().getMilliseconds();
    if(millisecond < 10) millisecond="00"+millisecond;
    else if(millisecond < 100) millisecond="0"+millisecond;
    if(second < 10) second="0"+second;
    if(minute < 10) minute="0"+minute;
    if(hour < 10) hour="0"+hour;
    var date = new Date().toDateString();

    document.getElementById("datum").innerHTML = date;

    document.getElementById("stundeUhr").innerHTML = hour;
    document.getElementById("minuteUhr").innerHTML = minute;
    document.getElementById("sekundeUhr").innerHTML = second;
    document.getElementById("millisekundeUhr").innerHTML = millisecond;
}

function setClock() {
  const currentDate = new Date()
  const millisecondsRatio = currentDate.getMilliseconds() / 1000
  const secondsRatio = (millisecondsRatio + currentDate.getSeconds()) / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(millisecondHand, millisecondsRatio)
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function zahlen(){
  var elementszahlen = document.getElementsByClassName("number");
  var elementsstriche = document.getElementsByTagName("polygon");
  if(document.getElementById("buttonZahlen").checked==true) {
    for(let i = 0; i< elementsstriche.length; i++) {
      elementsstriche[i].setAttribute("class", "strich transparent");
    }   
    for(let i = 0; i< elementszahlen.length; i++) {
      elementszahlen[i].setAttribute("class", "number number"+(i+1));
    }   
  } 
  else {
    for(let i = 0; i< elementsstriche.length; i++) {
      elementsstriche[i].setAttribute("class", "strich"+(i+1));
    }   
    for(let i = 0; i< elementszahlen.length; i++) {
      elementszahlen[i].setAttribute("class", "number transparent number"+(i+1));
    }   
  }
}

function millisekundenzeiger(){
  var elements = document.getElementById("millisecondsHand");
  if(document.getElementById("buttonMillisekundenzeiger").checked==true) {
      elements.setAttribute("class", "hand millisecondin");
  } 
  else {
    elements.setAttribute("class", "hand millisecondin transparent");
  }
}

function sekundenPunkte(){
  var elements = document.getElementsByClassName("point");
  if(document.getElementById("buttonSekundenPunkte").checked==true) {
    for(let i = 0; i< elements.length; i++) {
      elements[i].setAttribute("class", "point point"+(i+Math.round(i/4+0.5)));
    }   
  } 
  else {
    for(let i = 0; i< elements.length; i++) {
      elements[i].setAttribute("class", "transparent point");
    }
  }
}

function groeseplus(){
  element.style.setProperty('--rotation', "500px")

}

var groesseUhr = "300px";
if(window.innerWidth>2000) groesseUhr = "600px";
else if(window.innerWidth>1500) groesseUhr = "500px";
else if(window.innerWidth>1000) groesseUhr = "400px";

document.querySelector(":root").style.setProperty("--groesseTime", groesseUhr);

millisekundenzeiger();
sekundenPunkte();
zahlen();

