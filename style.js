var posBar = -99;
var posBarL = -99;
document.querySelector(":root").style.setProperty("--screenWidth", window.innerWidth+"px");

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
  }


var counterMenuWrap = 1;

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
        breite = (window.innerWidth)-52;
        if(side == "gleichung" && gL != "") {
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

