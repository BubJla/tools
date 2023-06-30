//document.cookie = "zahl=123; expires=27 Nov 2100 00:00:00 UTC; path=/";

var breite = (screen.width)*0.84-230;


function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (60*24*60*60*1000));
    var clear = "expires="+date.toUTCString();
    document.cookie = name + "=" + value + ";" + clear;
}

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

function changeSetting(){
    let groesse = document.getElementById("groesseSchrift").value;
    let schriftfarbe = document.getElementById("schriftfarbe").value;
    let hintergrundfarbe = document.getElementById("hintergrundfarbe").value;
    let akzentfarbe3 = document.getElementById("akzentfarbe3").value;
    let akzentfarbe2 = document.getElementById("akzentfarbe2").value;
    let akzentfarbe1 = document.getElementById("akzentfarbe1").value;
    let automatikAktiv = document.getElementById("automatisch").checked;
    if(!navigator.cookieEnabled) alert("Cookies müssen aktiviert sein um diese Funktion zu nutzen");
    document.querySelector(":root").style.setProperty("--groesse", groesse+"rem");
    document.querySelector(":root").style.setProperty("--groesseUeberschrift", 2*groesse+"rem");
    document.querySelector(":root").style.setProperty("--groesseUnterUeberschrift", 0.65*groesse+"rem");
    document.querySelector(":root").style.setProperty("--schriftfarbe", schriftfarbe);
    document.querySelector(":root").style.setProperty("--hintergrundfarbe", hintergrundfarbe);
    document.querySelector(":root").style.setProperty("--akzentfarbe3", akzentfarbe3);
    document.querySelector(":root").style.setProperty("--akzentfarbe1", akzentfarbe1);
    document.querySelector(":root").style.setProperty("--akzentfarbe2", akzentfarbe2);
    let summe = document.getElementById("hintergrundfarbe").value.split("#");
    if(automatikAktiv && summe[1][0] <= 9 && summe[1][2] <= 9 && summe[1][4] <= 9 && summe[1][0] >= 0 && summe[1][2] >= 0 && summe[1][4] >= 0) document.querySelector(":root").style.setProperty("--schriftfarbe", "#FFFFFF");
    else if(automatikAktiv) document.querySelector(":root").style.setProperty("--schriftfarbe", "#000000");
    var akzentfarbe1aktiv = "#";
    for(var i = 1; i < 7; i+= 2) {
        switch(akzentfarbe1[i]){
        case "0": 
            akzentfarbe1aktiv += 0;
            akzentfarbe1aktiv += 0;
            break;
        case "1": 
            akzentfarbe1aktiv += 0;
            akzentfarbe1aktiv += 0;
            break;
        case "2": 
            akzentfarbe1aktiv += 0;
            akzentfarbe1aktiv += 0;
            break;
        case "3": 
            akzentfarbe1aktiv += 0;
            akzentfarbe1aktiv += 0;
            break;
        case "4": 
            akzentfarbe1aktiv += 1;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "5": 
            akzentfarbe1aktiv += 2;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "6": 
            akzentfarbe1aktiv += 3;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "7": 
            akzentfarbe1aktiv += 4;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "8": 
            akzentfarbe1aktiv += 5;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "9": 
            akzentfarbe1aktiv += 6;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "a" || "A": 
            akzentfarbe1aktiv += 7;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "b" || "B": 
            akzentfarbe1aktiv += 8;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "c" || "C": 
            akzentfarbe1aktiv += 9;
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "d" || "D": 
            akzentfarbe1aktiv += "a";
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "e" || "E": 
            akzentfarbe1aktiv += "b";
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        case "f" || "F": 
            akzentfarbe1aktiv += "c";
            akzentfarbe1aktiv += akzentfarbe1[i+1];
            break;
        }
    }
    var akzentfarbe2aktiv = "#";
    for(var i = 1; i < 7; i+= 2) {
        switch(akzentfarbe2[i]){
        case "0": 
            akzentfarbe2aktiv += 0;
            akzentfarbe2aktiv += 0;
            break;
        case "1": 
            akzentfarbe2aktiv += 0;
            akzentfarbe2aktiv += 0;
            break;
        case "2": 
            akzentfarbe2aktiv += 0;
            akzentfarbe2aktiv += 0;
            break;
        case "3": 
            akzentfarbe2aktiv += 0;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "4": 
            akzentfarbe2aktiv += 1;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "5": 
            akzentfarbe2aktiv += 2;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "6": 
            akzentfarbe2aktiv += 3;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "7": 
            akzentfarbe2aktiv += 4;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "8": 
            akzentfarbe2aktiv += 5;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "9": 
            akzentfarbe2aktiv += 6;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "a" || "A": 
            akzentfarbe2aktiv += 7;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "b" || "B": 
            akzentfarbe2aktiv += 8;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "c" || "C": 
            akzentfarbe2aktiv += 9;
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "d" || "D": 
            akzentfarbe2aktiv += "a";
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "e" || "E": 
            akzentfarbe2aktiv += "b";
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        case "f" || "F": 
            akzentfarbe2aktiv += "c";
            akzentfarbe2aktiv += akzentfarbe2[i+1];
            break;
        }
    }
    document.querySelector(":root").style.setProperty("--akzentfarbe1aktiv", akzentfarbe1aktiv);
    document.querySelector(":root").style.setProperty("--akzentfarbe2aktiv", akzentfarbe2aktiv);

    setCookie("hintergrundfarbe", hintergrundfarbe);
    setCookie("schriftfarbe", schriftfarbe);
    setCookie("akzentfarbe1", akzentfarbe1);
    setCookie("akzentfarbe2", akzentfarbe2);
    setCookie("akzentfarbe3", akzentfarbe3);
    setCookie("akzentfarbe1aktiv", akzentfarbe1aktiv);
    setCookie("akzentfarbe2aktiv", akzentfarbe2aktiv);
    setCookie("groesse", groesse);
    setCookie("automatikAktiv", automatikAktiv);
}

function loeschen() {
    setCookie("hintergrundfarbe", "#000000");
    setCookie("schriftfarbe", "#FFFFFF");
    setCookie("akzentfarbe1", "#5A5AA0");
    setCookie("akzentfarbe2", "#5AA05A");
    setCookie("akzentfarbe3", "#F66151");
    setCookie("akzentfarbe1aktiv", "#1A1A60");
    setCookie("akzentfarbe2aktiv", "#1A601A");
    setCookie("groesse", 1);
    setCookie("automatikAktiv", 1);
    document.getElementById("groesseSchrift").value = readCookie("groesse");
    document.getElementById("schriftfarbe").value = readCookie("schriftfarbe");
    document.getElementById("hintergrundfarbe").value = readCookie("hintergrundfarbe");
    document.getElementById("akzentfarbe3").value = readCookie("akzentfarbe3");
    document.getElementById("akzentfarbe2").value = readCookie("akzentfarbe2");
    document.getElementById("akzentfarbe1").value = readCookie("akzentfarbe1");
    document.getElementById("automatisch").checked = readCookie("automatikAktiv");
    changeSetting();
}
//breite = 1;

document.getElementById("vorschau01").innerHTML = `
    <d>Vorschau*:</d>
    <span>            
        <div style="width: `+breite+`px; height: 360px; border: 5px solid white;">
            <ul class = "navigationsleiste" style="height: 348px; width: `+(breite*0.16)+`px; position: absolute;">
                <div style="height: 83%;">
                <li>
                    <a class="aktiv">generiert</a>
                </li>
                <li>
                    <a>Akzent 1</a>
                </li>
                <li>
                    <a>Akzent 1</a>
                </li>
                </div>
                    <a class="gear" style="padding-left: 0px">&#9881;</a>
            </ul>
            <div class = "divges" style="width: `+(breite*0.83)+`px">
                <h1 class = "head" >Überschrift</h1>
                <hr>
                <ul class="listeNebeneinander">
                    <li class="nebeneinander">
                        <a class="aktiv">generiert</a>
                    </li>
                    <li class="nebeneinander">
                        <a>Akzent 2</a>
                    </li>
                    <li class="nebeneinander">
                        <a>Akzent 2</a>
                    </li>
                </ul>
                <d style="margin-left : 2%">Das ist ein Beispieltext!</d>
                <d id="qwert" style="margin-left : 2%">Links können sie die Erscheinung der gesamten Website auf ihre Bedürfnisse anpassen.</d>
                <br>
                <span>
                    <div>
                        <d>Akzentfarbe 3:</d>
                        <input type="radio" checked>
                        <input type="checkbox" checked>
                        <input type="range" style="width: 200px">
                        </div>
                </span>
                </div>
        
        </div>
    </span>
    <d style="font-size: 0.7rem!important;">*nicht Maßstabsgetreu</d>
`;


if(readCookie("groesse") == undefined) {
    setCookie("hintergrundfarbe", "#000000");
    setCookie("schriftfarbe", "#FFFFFF");
    setCookie("akzentfarbe1", "#5A5AA0");
    setCookie("akzentfarbe2", "#5AA05A");
    setCookie("akzentfarbe3", "#F66151");
    setCookie("akzentfarbe1aktiv", "#1A1A60");
    setCookie("akzentfarbe2aktiv", "#1A601A");
    setCookie("groesse", 1);
    setCookie("automatikAktiv", "true");
}
document.getElementById("groesseSchrift").value = readCookie("groesse");
document.getElementById("schriftfarbe").value = readCookie("schriftfarbe");
document.getElementById("hintergrundfarbe").value = readCookie("hintergrundfarbe");
document.getElementById("akzentfarbe3").value = readCookie("akzentfarbe3");
document.getElementById("akzentfarbe2").value = readCookie("akzentfarbe2");
document.getElementById("akzentfarbe1").value = readCookie("akzentfarbe1");
if(readCookie("automatikAktiv")=="true") document.getElementById("automatisch").checked = true;
else document.getElementById("automatisch").checked = false;