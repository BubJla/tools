var endzeit = 0;
var startet = 0;
var interval
var clicks;
var zeitS = 10;
var anfangszeit;

function starting(){
    endzeit = new Date().getTime() + zeitS*1000+1000;
    anfangszeit = new Date().getTime();
    while(1){
        let jetzt = new Date().getTime();
        if(jetzt -1000 > anfangszeit) break;
    }
    document.getElementById("clickfeld").setAttribute("class", "gray");  
    startet = 1;
    clicks = 0;
    interval = setInterval(function() {ueberpruefen();}, 1);
    document.getElementById("startbutton").setAttribute("disabled", "");
}

function ueberpruefen() {
    var jetzt = new Date().getTime();
    if(jetzt > endzeit && endzeit != 0) {
        ausgabe();
        clearInterval(interval);
    }
}

function ausgabe() {
    var zeit = (new Date().getTime() - anfangszeit)/1000-1;
    document.getElementById("clickfeld").setAttribute("class", "white");
    document.getElementById("werte").innerHTML = "Zeit: " + Math.round(zeit) +"s<br>" + "Clicks: "+clicks + " <br>Clicks/sec: "+Math.round(clicks/zeit*10)/10;
}