var level = 0;
var punkte = 0;
var zeit = 0;
var fehler = 0;
var aufgaben = 0;
var levelA;
var punkteA = 0;
var zeitA = 0;
var fehlerA = 0;
var punkteA = 0;



function level0() {
    var Name = ["π", "√2", "√3", "√5", "√7", "1÷7", "1÷12", "1÷8"];
    var rechenAufgabe = Name[Math.round(Math.random()*8-0.5)];
    document.getElementById("aufgabenfeld").innerHTML = rechenAufgabe;
}

function level1() {
}

function level2() {
}

function level3() {
}

function level4() {
}

function aufgabe() {
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
        default:
    }
}

function ueberpruefen() {
    var aufgabe = document.getElementById("aufgabenfeld").innerHTML.replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI()").replace("√2", "Math.sqrt(2)").replace("√3", "Math.sqrt(3)").replace("√5", "Math.sqrt(5)").replace("√7", "Math.sqrt(7)").replace("÷", "/");
    var ergebnis = document.getElementById("ergebnisfeld").value;
    if(Math.round(eval(aufgabe)*100)/100 == Math.round(ergebnis*100+0.5)/100 || Math.round(eval(aufgabe)*100)/100 == Math.round(ergebnis*100-0.5)/100) {
        alert("richtig");
        aufgabe();
    }
    document.getElementById("punkte").innerHTML = punkte;
    document.getElementById("zeit").innerHTML = zeit;
    document.getElementById("aufgaben").innerHTML = aufgaben;
    document.getElementById("fehler").innerHTML = fehler;
}


for(let i = 0; i< new Date().getMilliseconds(); i++) {
    Math.random();
}
aufgabe();

