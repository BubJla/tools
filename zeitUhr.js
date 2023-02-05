var auto_refresh = setInterval(function() {zeit();}, 100);

function zeit(){
    var year = new Date().getFullYear();
    var month = new Date().getMonth()+1;
    var wochentag = new Date().getDay();
    var day = new Date().getDate();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();
    if(second < 10) second="0"+second;
    if(minute < 10) minute="0"+minute;
    if(hour < 10) hour="0"+hour;
    var date = new Date().toDateString();

    document.getElementById("datum").innerHTML = date;

    document.getElementById("stunde").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("sekunde").innerHTML = second;
}




setInterval(setClock, 10)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const millisecondsRatio = currentDate.getMilliseconds() / 1000
  const secondsRatio = (millisecondsRatio + currentDate.getSeconds()) / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

