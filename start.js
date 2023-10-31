/*var t00 = new Date().getTime();
for(let i = 0; i< 100000000; i++) ;
var t11 = new Date().getTime();
alert(t11-t00);*/
var posBar = -99;
var posBarL = -99;
document.querySelector(":root").style.setProperty("--screenWidth", window.innerWidth+"px");

document.head.innerHTML += `
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="64x64" href="favicon/favicon-64x64.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">






<link rel="alternate" href="de.html" hreflang="de">
  <link rel="alternate" href="en.html" hreflang="en">
  
`;

/*const date = new Date().getTime();
switch(date%8) {
    case 0:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconRed/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconRed/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconRed/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconRed/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 1:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconGreen/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconGreen/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconGreen/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconGreen/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 2:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconBlue/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconBlue/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconBlue/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconBlue/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 3:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconWhite/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconWhite/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconWhite/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconWhite/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 4:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconRedBright/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconRedBright/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconRedBright/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconRedBright/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 5:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconGreenBright/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconGreenBright/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconGreenBright/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconGreenBright/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 6:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconBlueBright/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconBlueBright/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconBlueBright/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconBlueBright/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
    case 7:
        document.head.innerHTML += `
        <link rel="apple-touch-icon" sizes="180x180" href="faviconBlack/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="64x64" href="faviconBlack/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="faviconBlack/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="faviconBlack/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        `;
        break;
}*/

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

function help(text) {
    document.getElementById("textInformate").innerHTML = text;
}

function declineCookie() {
    const doc = document.getElementById("cookieAllow");
    doc.classList.add("cookieAllowHide");
}

function acceptCookie() {
    const doc = document.getElementById("cookieAllow");
    doc.classList.add("cookieAllowHide");  
    setCookie("cookieAccepted", "true");
}

var elements = document.querySelectorAll(".animate");//animations
const elementsHead = document.querySelectorAll("h1");
for(i = 0; i < elements.length; i++) elementsHead[i].classList.add("animate2");

elements[0].classList.add("animationDiv");

elements = document.querySelectorAll(".animationDiv");

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

    const animationType = readCookie("animation");

    if(animationType == 1) elements[0].classList.add("animate12");
    else if(animationType != 2) elements[0].classList.remove("animate");
    
    if(animationType == 1) for(i = 0; i < elementsHead.length; i++) elementsHead[i].classList.add("animate22");
    else if(animationType != 2) for(i = 0; i < elementsHead.length; i++) elementsHead[i].classList.remove("animate2");
    if(animationType==0) document.body.classList.add("noAnimation");
  }

document.getElementById("navigationsleiste").innerHTML=`
<div style="height: 84vh">
    <li> 
        <a href="index.html" id="start" onclick="posBarL = 0; posBar = 0;">
            <div>
                Home
            </div>
        </a>
    </li>
    <li>    
        <a id="mathe" href="gleichung.html" onclick="posBarL = 1; posBar = 0;">
            <div>
                Mathematik
            </div>
        </a>
    </li>
    <li>    
        <a id="zeit" href="zeit.html" onclick="posBarL = 2; posBar = 0;">
            <div>
                Zeit
            </div>
        </a>
    </li>
    <li>    
        <a id="spiele" href="kopfrechentraining.html" onclick="posBarL = 3; posBar = 0;">
            <div>
                Spiele
            </div>
        </a>
    </li>
    <li>    
        <a id="sicherheit" href="eigenschaften.html" onclick="posBarL = 4; posBar = 0;">
            <div>
                Sonstiges
            </div>
        </a>
    </li>
    <li>    
        <a id="impressum" href="impressum.html" onclick="posBarL = 5; posBar = 0;">
            <div>
                Impressum
            </div>
        </a>
    </li>
    <li id="activeBackgroundLeft">    
    </li>
</div> 
`;

document.body.innerHTML+= `
<div class="menuTools wrapMenuIcon">    
    <div class="wrapMenu">

        <div id="menuIcon" onclick="menu();">
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>
</div>
<div class="menuTools settingsGear">    

    <a id="settings" class="gear" href="settings.html">&#9881;</a>
</div>`;

    var counterMenuWrap = 1;
    document.body.classList.add("click");

function menu() {
    let side = document.URL;
    side =  side.split("/");
    side =  side[side.length-1];
    side =  side.split(".");
    side =  side[0];
    //alert(side);
    const list = document.body.classList;
    if(counterMenuWrap%2 == 1) {
        list.remove("click");
        if(side == "gleichung" && gL != "") {
            breite = (window.innerWidth)-52;
            refreshGraph();
        }
    }
    else {
        list.add("click");
        if(side == "gleichung" && gL != "") {
            breite = (window.innerWidth)*0.84-52;
        }
    }
    counterMenuWrap++;
}

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
aktuelleSeite =  aktuelleSeite.replace("zeichnen", "sicherheit");
if(aktuelleSeite == '')aktuelleSeite = "start";
if(aktuelleSeite != 'settings') document.getElementById(aktuelleSeite).setAttribute("class", "aktiv");

if(aktuelleSeite == sessionStorage.getItem("lastSideBar")) document.body.classList.add("samesite");

if(readCookie("animation") != 0) {
    var sideNow = document.querySelector(".animate");
    if(sideNow.baseURI != sessionStorage.getItem("lastUrl")) document.getElementById("animateUnload").innerHTML = sessionStorage.getItem("lastSide");
    sessionStorage.setItem('lastSide', sideNow.innerHTML);
    sessionStorage.setItem('lastUrl', sideNow.baseURI);


    window.addEventListener('beforeunload', function() {
        sideNow = document.querySelector(".animate");
        sessionStorage.setItem('lastSide', sideNow.innerHTML);
    });
}

window.addEventListener("resize", function(event){
    document.querySelector(":root").style.setProperty("--screenWidth", window.innerWidth+"px");
});

window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('lastSideBar', aktuelleSeite);
    sessionStorage.setItem('posBar0', sessionStorage.getItem("posBar1"));
    if(posBar != -99) sessionStorage.setItem('posBar1', posBar);
    sessionStorage.setItem('posBar0L', sessionStorage.getItem("posBar1L"));
    if(posBarL != -99) sessionStorage.setItem('posBar1L', posBarL);
});

var num;
var barDisabled = 0;
if(aktuelleSeite == "mathe") num = 5;
else if(aktuelleSeite == "zeit") num = 3;
else if(aktuelleSeite == "spiele") num = 4;
else if(aktuelleSeite == "sicherheit") num = 3;
else barDisabled = 1;
let counter88 = 0;
let wid = window.innerWidth*0.84/num;
if(aktuelleSeite != sessionStorage.getItem("lastSideBar")) {
    sessionStorage.setItem('posBar0', 0);
    sessionStorage.setItem('posBar1', 0);
}
let pos0 = sessionStorage.getItem("posBar0");
let pos1 = sessionStorage.getItem("posBar1");
console.log(pos0);
console.log(pos1);
if(barDisabled == 0) {
    document.getElementById("activeBackground").style.width = wid+"px";
    document.getElementById("activeBackground").style.left = (window.innerWidth*0.16+wid*pos0)+"px";    
    if(readCookie("animation") != 0) document.getElementById("activeBackground").style.transitionDuration = (Math.abs(pos1-pos0)*150+300)+"ms";    
    var intval99 = setInterval(function() {
        if(counter88 == 1) {
            document.getElementById("activeBackground").style.width = wid+"px";
            document.getElementById("activeBackground").style.left = (window.innerWidth*0.16+wid*pos1)+"px";    
            clearInterval(intval99);
        }
        counter88++;
    }, 1);
}

window.addEventListener("resize", function() {
    let wid = window.innerWidth*0.84/num;
    document.getElementById("activeBackground").style.width = wid+"px";
    document.getElementById("activeBackground").style.left = (window.innerWidth*0.16+wid*pos1)+"px";    

});

const barDisabledL = 0;
if(aktuelleSeite != "settings") ;
else barDisabledL = 1;
var counter77 = 0;
let pos0L = sessionStorage.getItem("posBar0L");
let pos1L = sessionStorage.getItem("posBar1L");
console.log("L");
console.log(pos0L);
console.log(pos1L);
if(barDisabledL == 0) {
    document.getElementById("activeBackgroundLeft").style.top = (pos0L*document.querySelector(":root").style.getPropertyValue("--groesse")*40+10)+"px";    
    if(readCookie("animation") != 0) document.getElementById("activeBackgroundLeft").style.transitionDuration = (Math.abs(pos1L-pos0L)*110+130)+"ms";    
    var intval2 = setInterval(function() {
        if(counter77 == 1) {
            document.getElementById("activeBackgroundLeft").style.top = (pos1L*document.querySelector(":root").style.getPropertyValue("--groesse")*40+10)+"px";    
            clearInterval(intval2);
        }
        counter77++;
    }, 1);
}
