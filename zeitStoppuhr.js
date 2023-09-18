var time;
var timePause = 0;
var interval;
var hours = "00";
var minutes = "00";
var seconds = "00";
var milliseconds = "000";

function resetStoppuhr(){
    document.getElementById("stopp").setAttribute("disabled", "");
    document.getElementById("start").removeAttribute("disabled");
    clearInterval(interval);
    time = new Date();
    timePause = 0;
    hours = "00";
    minutes = "00";
    seconds = "00";
    milliseconds = "000";
    document.getElementById("stunde").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("sekunde").innerHTML = "00";
    document.getElementById("millisekunde").innerHTML = "000";
    document.getElementById("Zwischenergebnisse").innerHTML = ``;
}

function startStoppuhr(){
    document.getElementById("start").setAttribute("disabled", "");
    document.getElementById("stopp").removeAttribute("disabled");
    interval = setInterval(function() {refresh();}, 1);
    time = new Date() - timePause;
}

function stopStoppuhr(){
    document.getElementById("stopp").setAttribute("disabled", "");
    document.getElementById("start").removeAttribute("disabled");
    clearInterval(interval);
    timePause = new Date() - time;
}

function ZWERG(){
    document.getElementById("Zwischenergebnisse").innerHTML += `
    <br>
    <li style="list-style-type: none;">
        <span>
            <d id="stundeZWERG">00</d>
            <d>:</d>
            <d id="minuteZWERG">00</d>
            <d>:</d>
            <d id="sekundeZWERG">00</d>
            <d>:</d>
            <d id="millisekundeZWERG">000</d>
        </span>
    </li>
    `;
    document.getElementById("stundeZWERG").innerHTML = hours;
    document.getElementById("minuteZWERG").innerHTML = minutes;
    document.getElementById("sekundeZWERG").innerHTML = seconds;
    document.getElementById("millisekundeZWERG").innerHTML = milliseconds;

    document.getElementById("stundeZWERG").removeAttribute("id");
    document.getElementById("minuteZWERG").removeAttribute("id");
    document.getElementById("sekundeZWERG").removeAttribute("id");
    document.getElementById("millisekundeZWERG").removeAttribute("id");
}

function refresh() {
    jetzt = new Date();
    hours = Math.round((jetzt - time) / 3600000 - 0.5);
    minutes = Math.round((jetzt - time) / 60000 - hours*60 - 0.5);
    seconds = Math.round((jetzt - time) / 1000 - minutes*60 - hours*3600 - 0.5);
    milliseconds = (jetzt - time) - seconds*1000 - minutes*60000 - hours*3600000;
    if(milliseconds < 10) milliseconds="00"+milliseconds;
    else if(milliseconds < 100) milliseconds="0"+milliseconds;
    if(seconds < 10) seconds="0"+seconds;
    if(minutes < 10) minutes="0"+minutes;
    if(hours < 10) hours="0"+hours;
    document.getElementById("stunde").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("sekunde").innerHTML = seconds;
    document.getElementById("millisekunde").innerHTML = milliseconds;
}

