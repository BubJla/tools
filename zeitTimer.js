var interval;

var audio = new Audio('timerSound.mp3');

var soll = new Date().getTime();
var jetzt = new Date().getTime();
var timePause = 0;

var hours = "00";
var minutes = "00";
var seconds = "00";
var milliseconds = "000";

function startTimer() {
    document.getElementById("start").setAttribute("disabled", "");
    document.getElementById("stopp").removeAttribute("disabled");

    document.getElementById("stunden").setAttribute("disabled", "");
    document.getElementById("minuten").setAttribute("disabled", "");
    document.getElementById("sekunden").setAttribute("disabled", "");

    soll = new Date().getTime()
        + document.getElementById("stunden").value * 3600000
        + document.getElementById("minuten").value * 60000
        + document.getElementById("sekunden").value * 1000
        + timePause;
    interval = setInterval(function() {abgelaufen();}, 1);
}

function stoppTimer() {
    document.getElementById("stopp").setAttribute("disabled", "");
    document.getElementById("start").removeAttribute("disabled");

    timePause = soll
    - new Date().getTime()
    - document.getElementById("stunden").value * 3600000
    - document.getElementById("minuten").value * 60000
    - document.getElementById("sekunden").value * 1000;
    clearInterval(interval);
}

function resetTimer(){
    document.getElementById("stopp").setAttribute("disabled", "");
    document.getElementById("start").removeAttribute("disabled");
    
    document.getElementById("stunden").removeAttribute("disabled");
    document.getElementById("minuten").removeAttribute("disabled");
    document.getElementById("sekunden").removeAttribute("disabled");

    clearInterval(interval);

    timePause = 0;
    document.getElementById("stunden").value = 0;
    document.getElementById("minuten").value = 0;
    document.getElementById("sekunden").value = 0;

    document.getElementById("stunde").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("sekunde").innerHTML = "00";
    document.getElementById("millisekunde").innerHTML = "000";
    document.getElementById("Zwischenergebnisse").innerHTML = ``;
}

function abgelaufen(){
    jetzt = new Date().getTime();
    if(jetzt > soll && soll-jetzt > -12000) {
        audio.play();//funktioniert
        if (!document.hasFocus()) 
        {
        }
    }

    if(soll-jetzt > 0) {
        hours = Math.round((soll-jetzt) / 3600000 - 0.5);
        minutes = Math.round((soll-jetzt) / 60000 - hours*60 - 0.5);
        seconds = Math.round((soll-jetzt) / 1000 - minutes*60 - hours*3600 - 0.5);
        milliseconds = (soll-jetzt) - seconds*1000 - minutes*60000 - hours*3600000;    
        negativ = "";
    }
    else {
        hours = Math.round((jetzt - soll) / 3600000 - 0.5);
        minutes = Math.round((jetzt - soll) / 60000 - hours*60 - 0.5);
        seconds = Math.round((jetzt - soll) / 1000 - minutes*60 - hours*3600 - 0.5);
        milliseconds = (jetzt - soll) - seconds*1000 - minutes*60000 - hours*3600000;  
        negativ = "- ";
    }
    if(milliseconds < 10) milliseconds="00"+milliseconds;
    else if(milliseconds < 100) milliseconds="0"+milliseconds;
    if(seconds < 10) seconds="0"+seconds;
    if(minutes < 10) minutes="0"+minutes;
    if(hours < 10) hours="0"+hours;
    document.getElementById("stunde").innerHTML = negativ+hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("sekunde").innerHTML = seconds;
    document.getElementById("millisekunde").innerHTML = milliseconds;
}

 