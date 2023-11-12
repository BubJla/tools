//document.cookie = "zahl=123; expires=27 Nov 2100 00:00:00 UTC; path=/";

var antwort = false;

/*var result = confirm("Erlaubst du das Speichern von Cookies");
if (result) {
    cookie = true; 
}*/


var breite = (window.innerWidth)*0.84-240;


function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (60*24*60*60*1000));
    var clear = "expires="+date.toUTCString();
    document.cookie = name + "=" + value + ";" + clear;
}

function deleteCookie(name) {
    var value = "1";
    var date = new Date();
    date.setTime(date.getTime() - (60*24*60*60*1000));
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
    if(antwort == false && readCookie("cookieAccepted") != "true") {
        document.getElementById("divpopUp").innerHTML= `
        <div id="aufford">
            <section>
                <d>Erlaubst du das Speichern von Cookies ?</d>
                <br>
                <d>Sie werden verwendet, um das Design der Website zu speichern</d>
            </section>
            <section>
                <span id="JANEIN">
                    <div style="width: 50%; background: radial-gradient(circle, var(--hintergrundfarbe) 0%, #f00 100%);" onclick="antwort=false; removepopup();">
                        <d>
                            NEIN
                        </d>
                    </div>
                    <div style="width: 50%; background: radial-gradient(circle, var(--hintergrundfarbe) 0%, #0f0 100%);" onclick="antwort=true; removepopup(); changeSetting();">
                        <d>
                            Ja
                        </d>
                    </div>
                </span>
            </section>
        </div>
        `;
        if(antwort == false) return;
    }
    if(antwort == true) setCookie("cookieAccepted", "true");
    let groesse = document.getElementById("groesseSchrift").value;
    let schriftfarbe = document.getElementById("schriftfarbe").value;
    let hintergrundfarbe = document.getElementById("hintergrundfarbe").value;
    let akzentfarbe3 = document.getElementById("akzentfarbe3").value;
    let akzentfarbe2 = document.getElementById("akzentfarbe2").value;
    let akzentfarbe1 = document.getElementById("akzentfarbe1").value;
    let automatikAktiv = document.getElementById("automatisch").checked;
    var schriftart;
    var animationType;
    if(!navigator.cookieEnabled) alert("Cookies müssen aktiviert sein um diese Funktion zu nutzen");
    if(document.getElementById("serif").checked == true) schriftart = "serif"
    else if(document.getElementById("cursive").checked == true) schriftart = "cursive";
    else schriftart = "sans-serif";
    if(schriftart == "cursive") groesse *= 1.3;
    document.querySelector(":root").style.setProperty("--groesse", groesse);
    document.querySelector(":root").style.setProperty("--schriftfarbe", schriftfarbe);
    document.querySelector(":root").style.setProperty("--hintergrundfarbe", hintergrundfarbe);
    document.querySelector(":root").style.setProperty("--akzentfarbe3", akzentfarbe3);
    document.querySelector(":root").style.setProperty("--akzentfarbe1", akzentfarbe1);
    document.querySelector(":root").style.setProperty("--akzentfarbe2", akzentfarbe2);
    document.querySelector(":root").style.setProperty("--schriftart", schriftart);
    let summe = document.getElementById("hintergrundfarbe").value.split("#");
    if(automatikAktiv && summe[1][0] <= 9 && summe[1][2] <= 9 && summe[1][4] <= 9 && summe[1][0] >= 0 && summe[1][2] >= 0 && summe[1][4] >= 0) document.querySelector(":root").style.setProperty("--schriftfarbe", "#FFFFFF");
    else if(automatikAktiv) document.querySelector(":root").style.setProperty("--schriftfarbe", "#000000");
    var akzentfarbe1aktiv = "#";
    for(var i = 1; i < 7; i+= 2) {
        akzentfarbe1aktiv += akzentfarbe1[i];
        /*switch(akzentfarbe1[i]){
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
        }*/
    }
    var akzentfarbe2aktiv = "#";
    for(var i = 1; i < 7; i+= 2) {
        akzentfarbe2aktiv += akzentfarbe2[i];
        /*switch(akzentfarbe2[i]){
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
        }*/
    }
    akzentfarbe1aktiv += "8";
    akzentfarbe2aktiv += "8";
    document.querySelector(":root").style.setProperty("--akzentfarbe1aktiv", akzentfarbe1aktiv);
    document.querySelector(":root").style.setProperty("--akzentfarbe2aktiv", akzentfarbe2aktiv);

    if(document.getElementById("animationT0").checked == true) animationType = 0;    
    else if(document.getElementById("animationT1").checked == true) animationType = 1;  
    else  animationType = 2;    

    if(animationType != readCookie("animation")) location.reload();

    setCookie("hintergrundfarbe", hintergrundfarbe);
    setCookie("schriftfarbe", schriftfarbe);
    setCookie("akzentfarbe1", akzentfarbe1);
    setCookie("akzentfarbe2", akzentfarbe2);
    setCookie("akzentfarbe3", akzentfarbe3);
    setCookie("akzentfarbe1aktiv", akzentfarbe1aktiv);
    setCookie("akzentfarbe2aktiv", akzentfarbe2aktiv);
    setCookie("groesse", groesse);
    setCookie("automatikAktiv", automatikAktiv);
    setCookie("schriftart", schriftart);
    setCookie("animation", animationType);
}

function loeschen() {
    document.querySelector(":root").style.setProperty("--groesse", "1");
    document.querySelector(":root").style.setProperty("--schriftfarbe", "#FFF");
    document.querySelector(":root").style.setProperty("--hintergrundfarbe", "#000");
    document.querySelector(":root").style.setProperty("--akzentfarbe3", "#F66151");
    document.querySelector(":root").style.setProperty("--akzentfarbe1", "#5A5AA0");
    document.querySelector(":root").style.setProperty("--akzentfarbe2", "#5AA05A");
    document.querySelector(":root").style.setProperty("--akzentfarbe1aktiv", "#2A2A70");
    document.querySelector(":root").style.setProperty("--schriftart", "sans-serif");
    deleteCookie("hintergrundfarbe");
    deleteCookie("schriftfarbe");
    deleteCookie("akzentfarbe1");
    deleteCookie("akzentfarbe2");
    deleteCookie("akzentfarbe3");
    deleteCookie("akzentfarbe1aktiv");
    deleteCookie("akzentfarbe2aktiv");
    deleteCookie("groesse");
    deleteCookie("automatikAktiv");
    deleteCookie("schriftart");
    deleteCookie("animation");
    deleteCookie("cookieAccepted");

    location.reload();

    /*setCookie("hintergrundfarbe", "#000000");
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
    changeSetting();*/
}
//breite = 1;

if(window.innerWidth > 800) {
    document.getElementById("vorschau01").style.width = breite+"px";
    document.getElementById("settin").style.left = "16%";
    document.getElementById("settin").style.position = "absolute";
    document.getElementById("vorschau01").innerHTML = `
        <d>Vorschau*:</d>
        <d style="font-size: 0.7rem!important;">*nicht Maßstabsgetreu</d>
        <span>            
            <div style="width: `+breite+`px; height: 360px; border: 5px solid var(--schriftfarbe); position: absolute;">
                <ul class = "navigationsleiste" style="height: 348px; width: `+(breite*0.16)+`px; position: absolute;">
                    <div style="height: 83%;">
                        <li>
                            <a class="aktiv" style="background: var(--akzentfarbe1aktiv)!important;border-radius: 0px 15px 15px 0px;">generiert</a>
                        </li>
                        <li>
                            <a>
                                <div>
                                    Akzent 1
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div>
                                    Akzent 1
                                </div>
                            </a>
                        </li>
                    </div>
                    <a class="gear" style="padding-left: 0px">&#9881;</a>
                </ul>
                <div class = "divges settings" style="width: `+(breite*0.83)+`px; background: #0000">
                    <h1 class = "head" >Überschrift</h1>
                    <hr>
                    <ul class="listeNebeneinander settings">
                        <li class="nebeneinander" style="border-radius: 15px">
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
                            <input type="range" style="width: `+(breite*0.83-50)+`px">
                            </div>
                    </span>
                    </div>
            
            </div>
        </span>
    `;
}
else {
    breite+= 230;
    document.getElementById("vorschau02").innerHTML = `
    <hr>
    <d>Vorschau*:</d>
    <d style="font-size: 0.7rem!important;">*nicht Maßstabsgetreu</d>
    <span>            
        <div style="width: `+breite+`px; height: 360px; border: 5px solid var(--schriftfarbe); position: absolute;">
        <ul class = "navigationsleiste" style="height: 348px; width: `+(breite*0.16)+`px; position: absolute;">
            <div style="height: 83%;">
                <li>
                    <a class="aktiv" style="background: var(--akzentfarbe1aktiv)!important;border-radius: 0px 15px 15px 0px;">generiert</a>
                </li>
                <li>
                    <a>
                        <div>
                            Akzent 1
                        </div>
                    </a>
                </li>
                <li>
                    <a>
                        <div>
                            Akzent 1
                        </div>
                    </a>
                </li>
            </div>
            <a class="gear" style="padding-left: 0px">&#9881;</a>
        </ul>
        <div class = "divges settings" style="width: `+(breite*0.83)+`px; background: #0000">
                <h1 class = "head" >Überschrift</h1>
                <hr>
                <ul class="listeNebeneinander settings">
                    <li class="nebeneinander" style="border-radius: 15px">
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
                <d id="qwert" style="margin-left : 2%">Oben können sie die Erscheinung der gesamten Website auf ihre Bedürfnisse anpassen.</d>
                <br>
                <span>
                    <div>
                        <d>Akzentfarbe 3:</d>
                        <input type="radio" checked>
                        <input type="checkbox" checked>
                        <input type="range" style="width: `+(breite*0.83-50)+`px">
                        </div>
                </span>
                </div>
        
        </div>
    </span>
`;
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
    document.getElementById("animationT2").checked = true;
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
    if(readCookie("animation") == 0) document.getElementById("animationT0").checked = true;
    else if(readCookie("animation") == 1) document.getElementById("animationT1").checked = true;
    else document.getElementById("animationT2").checked = true;
}
if(document.querySelector(":root").style.getPropertyValue("--schriftart")=="") document.querySelector(":root").style.setProperty("--schriftart", "sans-serif");
if(document.querySelector(":root").style.getPropertyValue("--schriftart")=="serif") document.getElementById("serif").checked = true;
else if(document.querySelector(":root").style.getPropertyValue("--schriftart")=="cursive") document.getElementById("cursive").checked = true;
else document.getElementById("sans").checked = true;
if(document.querySelector(":root").style.getPropertyValue("--schriftart")=="cursive") document.getElementById("groesseSchrift").value = document.querySelector(":root").style.getPropertyValue("--groesse")/1.3;
else document.getElementById("groesseSchrift").value = document.querySelector(":root").style.getPropertyValue("--groesse");
document.getElementById("schriftfarbe").value = document.querySelector(":root").style.getPropertyValue("--schriftfarbe");
document.getElementById("hintergrundfarbe").value = document.querySelector(":root").style.getPropertyValue("--hintergrundfarbe");
document.getElementById("akzentfarbe3").value = document.querySelector(":root").style.getPropertyValue("--akzentfarbe3");
document.getElementById("akzentfarbe2").value = document.querySelector(":root").style.getPropertyValue("--akzentfarbe2");
document.getElementById("akzentfarbe1").value = document.querySelector(":root").style.getPropertyValue("--akzentfarbe1");

window.addEventListener("resize", function(event){
    location.reload();
});

