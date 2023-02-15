var starttime = 1;
var interval;
var jetzt = 0;

function sleep(millisekunden) {
    var date = new Date().getTime;
    var soll = date + millisekunden;
    do {
        date = new Date().getTime(); 
    }
    while(date < soll);
}

function start(){
    document.getElementById("zeitReaktion").innerHTML = ""
    document.getElementById("reaktionsfeld").setAttribute("class", "");
    clearInterval(interval);
    starttime = new Date().getTime() + Math.random()*7000 + 2000;// 2sekunden + 0 - 7 sekunden
    document.getElementById("startbutton").setAttribute("disabled", "");
    interval = setInterval(function() {ausgabe();ueberpruefen();}, 1);
}

function ausgabe(){
    jetzt = new Date().getTime();
    if(jetzt >= starttime) {
        document.getElementById("reaktionsfeld").setAttribute("class", "white");  
        document.getElementById("zeitReaktion").innerHTML = "";  
        clearInterval(interval);
        interval = setInterval(function() {ueberpruefen();}, 1);
    }
}

function ueberpruefen(){
    jetzt = new Date().getTime();
    function capturekeys(action) { 
    if(action.keyCode==32) fertig(); 
    } 
    document.onkeypress = capturekeys;
}

function fertig(){
    clearInterval(interval);
    if(jetzt < starttime)  {
        document.getElementById("reaktionsfeld").setAttribute("class", "red");
        document.getElementById("zeitReaktion").innerHTML = "FALSCH <br> ZU FRÜH"
    }
    else {
        document.getElementById("reaktionsfeld").setAttribute("class", "green");
        document.getElementById("zeitReaktion").innerHTML = "RICHTIG! <br>" + Math.round((jetzt-starttime)) + "ms";  
    }
    document.getElementById("startbutton").removeAttribute("disabled");
   
}

