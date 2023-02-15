var auto_refresh = setInterval(function() {zeit();}, 1);

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

    document.getElementById("stunde").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("sekunde").innerHTML = second;
    document.getElementById("millisekunde").innerHTML = millisecond;
}




setInterval(setClock, 1)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const millisecondHand = document.querySelector('[data-millisecond-hand]')

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

function sekundenPunkte(){
  if(document.getElementById("buttonMillisekundenzeiger").checked==1) document.getElementsByClassName("point").setAttribute("class", "uhrHintergrundGrau");
  else document.getElementsByClassName("point").setAttribute("class", "uhrHintergrundGrau");
}