var level = 2;
var punkte = 0;
var zeit = 0;
var fehler = 0;
var aufgaben = 0;
var levelA;
var punkteA = 0;
var zeitA = 0;
var fehlerA = 0;
var punkteA = 0;
var aufgabeLetzt;
var neueaufgabe = true;
var interval = setInterval(function() {aufgabe();}, 10);



function level0() {
    var Name = ["π", "√2", "√3", "√5", "√7", "1÷7", "1÷12", "1÷8"];
    var rechenAufgabe = Name[Math.round(Math.random()*8-0.5)];
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function level1() {
    var rechenAufgabe
    var rechenart = Math.round(Math.random()*2-0.5);
    switch(rechenart) {
        case 0: // +
            rechenAufgabe = Math.round(Math.random()*50+0.5) + "+" + Math.round(Math.random()*50+0.5);
            break;
        case 1: // -
            var zahl1 = Math.round(Math.random()*100+0.5);
            rechenAufgabe = zahl1 + "-" + Math.round(Math.random()*zahl1+0.5);
            break;
        default: 
            break;
    }
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function level2() {
    var rechenAufgabe
    var rechenart = Math.round(Math.random()*4-0.5);
    switch(rechenart) {
        case 0: // +
            rechenAufgabe = Math.round(Math.random()*200+0.5) + "+" + Math.round(Math.random()*200+0.5);
            break;
        case 1: // -
            rechenAufgabe = Math.round(Math.random()*400+0.5) + "-" + Math.round(Math.random()*400+0.5);
            break;
        case 2: // *
            rechenAufgabe = Math.round(Math.random()*10+0.5) + "×" + Math.round(Math.random()*10+0.5);
            break;
        case 3: // /
            var zahl1 = Math.round(Math.random()*10+0.5);
            rechenAufgabe = zahl1*Math.round(Math.random()*10+0.5) + "÷" + zahl1;
            break;
        default: 
            break;
    }
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function level22() {
    var rechenAufgabe
    rechenAufgabe = Math.round(Math.random()*10+0.5) + "×" + Math.round(Math.random()*10+0.5);
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function level3() {
    var rechenAufgabe
    var rechenart = Math.round(Math.random()*4-0.5);
    switch(rechenart) {
        case 0: // +
            rechenAufgabe = (Math.round(Math.random()*400+0.5)+100) + "+" + (Math.round(Math.random()*400+0.5)+100);
            break;
        case 1: // -
            rechenAufgabe = (Math.round(Math.random()*900+0.5)+100) + "-" + (Math.round(Math.random()*900+0.5)+100);
            break;
        case 2: // *
            rechenAufgabe = (Math.round(Math.random()*10+0.5)+10) + "×" + (Math.round(Math.random()*10+0.5)+10);
            break;
        case 3: // /
            var zahl1 = Math.round(Math.random()*10+0.5)+10;
            rechenAufgabe = zahl1*Math.round(Math.random()*20+0.5) + "÷" + zahl1;
            break;
        default: 
            break;
    }
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function level4() {
    var rechenAufgabe
    var rechenart = Math.round(Math.random()*4-0.5);
    switch(rechenart) {
        case 0: // +
            rechenAufgabe = (Math.round(Math.random()*400+0.5)*5+500) + "+" + (Math.round(Math.random()*400+0.5)*5+500);
            break;
        case 1: // -
            rechenAufgabe = (Math.round(Math.random()*900+0.5)*5+500) + "-" + (Math.round(Math.random()*900+0.5)*5+500);
            break;
        case 2: // *
            rechenAufgabe = (Math.round(Math.random()*15+0.5)+10) + "×" + (Math.round(Math.random()*15+0.5)+10);
            break;
        case 3: // /
            var zahl1 = Math.round(Math.random()*15+0.5)+10;
            rechenAufgabe = zahl1*Math.round(Math.random()*25+0.5) + "÷" + zahl1;
            break;
        default: 
            break;
    }
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function aufgabe() {
    if(neueaufgabe == false) return;
    document.getElementById("ergebnisfeld").value = "";
    neueaufgabe = false;
    document.getElementById("zeit").innerHTML = zeit;
    document.getElementById("aufgaben").innerHTML = aufgaben;
    document.getElementById("fehler").innerHTML = fehler;
    if(zeit!= 0) punkte = Math.round(1000/(zeit/aufgaben)/((fehler/aufgaben)+1));
    document.getElementById("punkte").innerHTML = punkte;
    switch(level) {
        case 0:
            level0();
            break;
        case 1:
            level1();
            break;
        case 2:
            level2();
            break;
        case 3:
            level3();
            break;
        case 4:
            level4();
            break;
        case 22:
            level22();
            break;
        default:
    }
    if(aufgabeLetzt == document.getElementById("aufgabenfeld").innerHTML) neueaufgabe = true;
    aufgabeLetzt = document.getElementById("aufgabenfeld").innerHTML;
}

function ueberpruefen() {
    var aufgabe = document.getElementById("aufgabenfeld").innerHTML.replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("√2", "Math.sqrt(2)").replace("√3", "Math.sqrt(3)").replace("√5", "Math.sqrt(5)").replace("√7", "Math.sqrt(7)").replace("÷", "/").replace("×", "*");
    var ergebnis = document.getElementById("ergebnisfeld").value;
    if((Math.round(eval(aufgabe)*100)/100 == Math.round(ergebnis*100+0.5)/100) || (Math.round(eval(aufgabe)*100)/100 == Math.round(ergebnis*100-0.5)/100)) {
        aufgaben++;
        neueaufgabe = true;
    }
    else {
        document.getElementById("ergebnisfeld").value = "";
        fehler++;
    }
    document.getElementById("zeit").innerHTML = zeit;
    document.getElementById("aufgaben").innerHTML = aufgaben;
    document.getElementById("fehler").innerHTML = fehler;
    if(zeit!= 0) punkte = Math.round(1000/(zeit/aufgaben)/((fehler/aufgaben)+1));
    document.getElementById("punkte").innerHTML = punkte;
}


for(let i = 0; i< new Date().getMilliseconds(); i++) {
    Math.random();
}
