function readCookie(name) {
    let cookieNew = document.cookie.split(";");
    for(let i = 0; i< cookieNew.length; i++) {
        cookieNew[i] = cookieNew[i].replace(' ', '');
        cookieNew[i]= cookieNew[i].split('=');
    }
    for(let i = 0; i< cookieNew.length; i++) {
        if(cookieNew[i][0] == name) return cookieNew[i][1];
    }
}

function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (60*24*60*60*1000));
    var clear = "expires="+date.toUTCString();
    document.cookie = name + "=" + value + ";" + clear;
}


if(readCookie("groesse") == undefined) {
    setCookie("hintergrundfarbe", "#000000");
    setCookie("schriftfarbe", "#FFFFFF");
    setCookie("akzentfarbe1", "#5A5AA0");
    setCookie("akzentfarbe2", "#5AA05A");
    setCookie("akzentfarbe3", "#4444FF");
    setCookie("akzentfarbe1aktiv", "#2A2A70");
    setCookie("akzentfarbe2aktiv", "#2A702A");
    setCookie("groesse", 1);
    setCookie("automatikAktiv", "true");
}
document.querySelector(":root").style.setProperty("--groesse", readCookie("groesse")+"rem");
document.querySelector(":root").style.setProperty("--groesseUeberschrift", 2*readCookie("groesse")+"rem");
document.querySelector(":root").style.setProperty("--groesseUnterUeberschrift", 0.65*readCookie("groesse")+"rem");
document.querySelector(":root").style.setProperty("--schriftfarbe", readCookie("schriftfarbe"));
document.querySelector(":root").style.setProperty("--hintergrundfarbe", readCookie("hintergrundfarbe"));
document.querySelector(":root").style.setProperty("--akzentfarbe3", readCookie("akzentfarbe3"));
document.querySelector(":root").style.setProperty("--akzentfarbe1", readCookie("akzentfarbe1"));
document.querySelector(":root").style.setProperty("--akzentfarbe2", readCookie("akzentfarbe2"));
document.querySelector(":root").style.setProperty("--akzentfarbe1aktiv", readCookie("akzentfarbe1aktiv"));
document.querySelector(":root").style.setProperty("--akzentfarbe2aktiv", readCookie("akzentfarbe2aktiv"));
let summe = readCookie("hintergrundfarbe").split("#");
if(readCookie("automatikAktiv") == "true" && summe[1][0] <= 9 && summe[1][2] <= 9 && summe[1][4] <= 9 && summe[1][0] >= 0 && summe[1][2] >= 0 && summe[1][4] >= 0) document.querySelector(":root").style.setProperty("--schriftfarbe", "#FFFFFF");
else if(readCookie("automatikAktiv") == "true") document.querySelector(":root").style.setProperty("--schriftfarbe", "#000000");


document.getElementById("navigationsleiste").innerHTML='<div style="height: 86%"><li>    <a href="index.html" id="start">Startseite</a></li><li>    <a id="zeit" href="zeit.html">Zeit</a></li><li>    <a id="spiele" href="spiele.html">Spiele</a></li><li>    <a id="mathe" href="rechner.html">Mathematik</a></li><li>    <a id="sicherheit" href="sicherheit.html">Sicherheit</a></li><li>    <a id="analysis" href="integral.html">Integral</a></li><li>    <a id="impressum" href="impressum.html">Impressum</a></li></div>    <a id="settings" class="gear" href="settings.html">&#9881;</a>'
//document.getElementById("navigationsleiste").innerHTML="<li><a href='settings.html'>12345</a></li>"

let aktuelleSeite = document.URL;
aktuelleSeite =  aktuelleSeite.split("/");
aktuelleSeite =  aktuelleSeite[aktuelleSeite.length-1];
aktuelleSeite =  aktuelleSeite.split(".");
aktuelleSeite =  aktuelleSeite[0];
aktuelleSeite =  aktuelleSeite.replace("index", "start");
aktuelleSeite =  aktuelleSeite.replace("kopfrechentraining", "mathe");
aktuelleSeite =  aktuelleSeite.replace("rechnerBinaer", "mathe");
aktuelleSeite =  aktuelleSeite.replace("rechner", "mathe");
aktuelleSeite =  aktuelleSeite.replace("spieleClickgeschw", "spiele");
aktuelleSeite =  aktuelleSeite.replace("TicTacToe", "spiele");
aktuelleSeite =  aktuelleSeite.replace("zeitStoppuhr", "zeit");
aktuelleSeite =  aktuelleSeite.replace("zeitTimer", "zeit");
aktuelleSeite =  aktuelleSeite.replace("integral", "analysis");
aktuelleSeite =  aktuelleSeite.replace("settings", "se11ngs");
if(aktuelleSeite == '')aktuelleSeite = "start";
//alert(aktuelleSeite);
//alert(document.getElementById("bhwdves")==null);
document.getElementById(aktuelleSeite).setAttribute("class", "aktiv");
