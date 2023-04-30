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

if(readCookie("groesse") == undefined) {
    setCookie("hintergrundfarbe", "#000000");
    setCookie("schriftfarbe", "#FFFFFF");
    setCookie("akzentfarbe1", "#5A5AA0");
    setCookie("akzentfarbe2", "#5AA05A");
    setCookie("akzentfarbe3", "#4444FF");
    setCookie("akzentfarbe1aktiv", "#1A1A60");
    setCookie("akzentfarbe2aktiv", "#1A601A");
    setCookie("groesse", 1);
    setCookie("automatikAktiv", 1);
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
