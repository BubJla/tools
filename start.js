document.querySelector(":root").style.setProperty("--screenWidth", window.innerWidth+"px");

document.head.innerHTML += `
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="64x64" href="favicon/favicon-64x64.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QPH30E9YBE"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-QPH30E9YBE');
</script>


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
        <a href="index.html" id="start">
            <div>
                Home
            </div>
        </a>
    </li>
    <li>    
        <a id="mathe" href="gleichung.html">
            <div>
                Mathematik
            </div>
        </a>
    </li>
    <li>    
        <a id="zeit" href="zeit.html">
            <div>
                Zeit
            </div>
        </a>
    </li>
    <li>    
        <a id="spiele" href="kopfrechentraining.html">
            <div>
                Spiele
            </div>
        </a>
    </li>
    <li>    
        <a id="sicherheit" href="eigenschaften.html">
            <div>
                Sonstiges
            </div>
        </a>
    </li>
    <li>    
        <a id="impressum" href="impressum.html">
            <div>
                Impressum
            </div>
        </a>
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
aktuelleSeite =  aktuelleSeite.replace("zeichnen", "sicherheit");
if(aktuelleSeite == '')aktuelleSeite = "start";
if(aktuelleSeite != 'settings') document.getElementById(aktuelleSeite).setAttribute("class", "aktiv");


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