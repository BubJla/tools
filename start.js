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

function removepopup() {
    document.getElementById("aufford").classList.add("durchsichtig");
}

function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (60*24*60*60*1000));
    var clear = "expires="+date.toUTCString();
    //alert(name + "=" + value + ";" + clear + ";SameSite=Lax");
    document.cookie = name + "=" + value + ";" + clear + ";SameSite=Lax";
}


if(readCookie("groesse") == undefined) {
    document.querySelector(":root").style.setProperty("--groesse", "1");
    document.querySelector(":root").style.setProperty("--schriftfarbe", "#FFF");
    document.querySelector(":root").style.setProperty("--hintergrundfarbe", "#000");
    document.querySelector(":root").style.setProperty("--akzentfarbe3", "#F66151");
    document.querySelector(":root").style.setProperty("--akzentfarbe1", "#5A5AA0");
    document.querySelector(":root").style.setProperty("--akzentfarbe2", "#5AA05A");
    document.querySelector(":root").style.setProperty("--akzentfarbe1aktiv", "#2A2A70");
    document.querySelector(":root").style.setProperty("--akzentfarbe2aktiv", "#2A702A");
    document.querySelector(":root").style.setProperty("--schriftart", "sans-serif");
/*
    setCookie("hintergrundfarbe", "#000000");
    setCookie("schriftfarbe", "#FFFFFF");
    setCookie("akzentfarbe1", "#5A5AA0");
    setCookie("akzentfarbe2", "#5AA05A");
    setCookie("akzentfarbe3", "#F66151");
    setCookie("akzentfarbe1aktiv", "#2A2A70");
    setCookie("akzentfarbe2aktiv", "#2A702A");
    setCookie("groesse", 1);
    setCookie("automatikAktiv", "true");*/
}
else {
    document.querySelector(":root").style.setProperty("--groesse", readCookie("groesse"));
    document.querySelector(":root").style.setProperty("--schriftfarbe", readCookie("schriftfarbe"));
    document.querySelector(":root").style.setProperty("--hintergrundfarbe", readCookie("hintergrundfarbe"));
    document.querySelector(":root").style.setProperty("--akzentfarbe3", readCookie("akzentfarbe3"));
    document.querySelector(":root").style.setProperty("--akzentfarbe1", readCookie("akzentfarbe1"));
    document.querySelector(":root").style.setProperty("--akzentfarbe2", readCookie("akzentfarbe2"));
    document.querySelector(":root").style.setProperty("--akzentfarbe1aktiv", readCookie("akzentfarbe1aktiv"));
    document.querySelector(":root").style.setProperty("--akzentfarbe2aktiv", readCookie("akzentfarbe2aktiv"));
    document.querySelector(":root").style.setProperty("--schriftart", readCookie("schriftart"));
    let summe = readCookie("hintergrundfarbe").split("#");
    if(readCookie("automatikAktiv") == "true" && summe[1][0] <= 9 && summe[1][2] <= 9 && summe[1][4] <= 9 && summe[1][0] >= 0 && summe[1][2] >= 0 && summe[1][4] >= 0) document.querySelector(":root").style.setProperty("--schriftfarbe", "#FFFFFF");
    else if(readCookie("automatikAktiv") == "true") document.querySelector(":root").style.setProperty("--schriftfarbe", "#000000");
}

document.getElementById("navigationsleiste").innerHTML=`
<div style="height: 84vh">
    <li> 
        <a href="index.html" id="start">Startseite</a>
    </li>
    <li>    
        <a id="mathe" href="gleichung.html">Mathematik</a>
    </li>
    <li>    
        <a id="zeit" href="zeit.html">Zeit</a>
    </li>
    <li>    
        <a id="spiele" href="kopfrechentraining.html">Spiele</a>
    </li>
    <li>    
        <a id="sicherheit" href="eigenschaften.html">Sonstiges</a>
    </li>
    <li>    
        <a id="impressum" href="impressum.html">Impressum</a>
    </li>
</div> 
<div style="height: 10vh">    
    <a id="settings" class="gear" href="settings.html">&#9881;</a>
</div>`;


let aktuelleSeite = document.URL;
aktuelleSeite =  aktuelleSeite.split("/");
aktuelleSeite =  aktuelleSeite[aktuelleSeite.length-1];
aktuelleSeite =  aktuelleSeite.split(".");
aktuelleSeite =  aktuelleSeite[0];
aktuelleSeite =  aktuelleSeite.replace("index", "start");
aktuelleSeite =  aktuelleSeite.replace("kopfrechentraining", "spiele");
aktuelleSeite =  aktuelleSeite.replace("rechnerBinaer", "mathe");
aktuelleSeite =  aktuelleSeite.replace("rechner", "mathe");
aktuelleSeite =  aktuelleSeite.replace("spieleClickgeschw", "spiele");
aktuelleSeite =  aktuelleSeite.replace("TicTacToe", "spiele");
aktuelleSeite =  aktuelleSeite.replace("zeitStoppuhr", "zeit");
aktuelleSeite =  aktuelleSeite.replace("zeitTimer", "zeit");
aktuelleSeite =  aktuelleSeite.replace("gleichungSystem", "mathe");
aktuelleSeite =  aktuelleSeite.replace("gleichung", "mathe");
aktuelleSeite =  aktuelleSeite.replace("integral", "mathe");
aktuelleSeite =  aktuelleSeite.replace("eigenschaften", "sicherheit");
if(aktuelleSeite == '')aktuelleSeite = "start";
if(aktuelleSeite != 'settings') document.getElementById(aktuelleSeite).setAttribute("class", "aktiv");

/*window.addEventListener("beforeunload", function(event) {
    //event.preventDefault();
    animateBeforeUnload();
  });
  
  function animateBeforeUnload() {
    var elements = document.querySelectorAll('.animate');
    elements.setAttribute("class", "animate2");
    // Hier kannst du deine gewünschte Animation implementieren
    // Zum Beispiel die Änderung von CSS-Eigenschaften, die Verwendung von CSS-Transitions/Animationen oder die Nutzung von JavaScript-basierten Animationen wie GSAP oder jQuery
    // ...
    // ...
    // Stelle sicher, dass die Animation innerhalb eines bestimmten Zeitraums abgeschlossen ist, da die Seite sonst sofort geschlossen wird
  }*/