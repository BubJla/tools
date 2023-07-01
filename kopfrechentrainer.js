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

var zeitAnfang = new Date().getTime();


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
    document.getElementById("zeitRechner").innerHTML = zeit;
    document.getElementById("aufgaben").innerHTML = aufgaben;
    document.getElementById("fehler").innerHTML = fehler;
    zeit = Math.round((new Date().getTime() - zeitAnfang) / 100)/10;
    if(aufgaben!= 0 && zeit!= 0 && level != 0 && level != 22) punkte = level * Math.round(1000/(zeit/aufgaben)/((fehler/aufgaben)+1));
    else if(aufgaben!= 0 && zeit != 0) punkte =  Math.round(1000/(zeit/aufgaben)/((fehler/aufgaben)+1));
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
    document.getElementById("zeitRechner").innerHTML = zeit;
    document.getElementById("aufgaben").innerHTML = aufgaben;
    document.getElementById("fehler").innerHTML = fehler;
    zeit = Math.round((new Date().getTime() - zeitAnfang) / 100)/10;
    if(zeit!= 0 && level != 0 && level != 22) punkte = level * Math.round(1000/(zeit/aufgaben)/((fehler/aufgaben)+1));
    else if(zeit != 0) Math.round(1000/(zeit/aufgaben)/((fehler/aufgaben)+1));
    document.getElementById("punkte").innerHTML = punkte;
    var aufstieg = document.getElementById("autoPerformance").checked;
    if(punkte/level < 30 && level != 1 && level != 0 && level != 22 && aufgaben > 2 && aufstieg == true) {
        level --;
        reset();
    }
    else if(punkte/level > 130 && level != 4 && level != 0 && level != 22 && aufgaben > 3 && aufstieg == true) {
        level++;
        reset();
    }
}

function reset() {
    zeitAnfang = new Date().getTime();
    punkte = 0;
    aufgaben = 0;
    fehler = 0;
    zeit = 0;
    document.getElementById("zeitRechner").innerHTML = zeit;
    document.getElementById("aufgaben").innerHTML = aufgaben;
    document.getElementById("fehler").innerHTML = fehler;
    document.getElementById("punkte").innerHTML = punkte;
    switch(level) {
        case 0:
            document.getElementById("level0checked").checked = true;
            break;
        case 22:
            document.getElementById("level2+checked").checked = true;
            break;
        case 1:
            document.getElementById("level1checked").checked = true;
            break;
        case 2:
            document.getElementById("level2checked").checked = true;
            break;
        case 3:
            document.getElementById("level3checked").checked = true;
            break;
        case 4:
            document.getElementById("level4checked").checked = true;
            break;
        default:
        }
    neueaufgabe = true;
}

for(let i = 0; i< new Date().getMilliseconds(); i++) {
    Math.random();
}


if(screen.width > 800) {
    document.getElementById("auswahlLevel").innerHTML = `
            <div style="width: 11%" class="nichtA">
                <span>
                    <d>Level:</d>
                </span>
            </div>
            <div style="width: 11%;">
                <d>0</d>
                <span>
                    <input type="radio" name = "clickzeit" value = "0" id="level0checked" onclick="level = 0; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>besondere Zahlen wie PI</d>
            </div>
            <div style="width: 11%">
                <d>2+</d>
                <span>
                    <input type="radio" name = "clickzeit" value = "2+" id="level2+checked" onclick="level = 22; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>kleines Einmaleins</d>
            </div>
            <div style="width: 11%">
                <span>
                    <d>1</d>
                </span>
                <span>
                    <input type="radio" name = "clickzeit"  value = "1" id="level1checked" onclick="level = 1; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>+/-: 0 - 100</d>
            </div>
            <div style="width: 11%">
                <span>
                    <d>2</d>
                </span>
                <span>
                    <input type="radio" name = "clickzeit" value = "2" id="level2checked" onclick="level = 2; reset();" style="width: 14px; height: 14px" checked>
                </span>
                <br>
                <d>+/-: -400 - 400
                    <br>
                    ×/÷: 0 - 100
                </d>
            </div>
            <div style="width: 11%">
                <span>
                    <d>3</d>
                </span>
                <span>
                    <input type="radio" name = "clickzeit" value = "3" id="level3checked" onclick="level = 3; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>+/-: -1000 - 1000
                    <br>
                    ×/÷: 400 - 400
                </d>
            </div>
            <div style="width: 11%">
                <span><d>4</d></span>
                <span>
                    <input type="radio" name = "clickzeit" value = "4" id="level4checked" onclick="level = 4; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>+/-: -5000 - 5000
                    <br>
                    ×/÷: 625 - 625
                </d>
            </div>
            <div style="width: 12%" class="nichtA">
                <span><d>automatischer</d></span><span><d>Levelaufstieg</d></span>
                <br>
                <span><input type="checkbox" id="autoPerformance" style="width: 1rem; height: 1rem;" checked></span>
            </div>
            <div style="width: 11%" class="nichtA">
                <input type="button" value = "NÄCHSTE" onclick="fehler++;neueaufgabe = true;" id="nextbutton" style="height: 90px; width: 100%; font-weight: 900;">
            </div>
            <div style="width: 11%" class="nichtA">
                <input type="button" value = "ABGEBEN" onclick="ueberpruefen()" id="startbutton" style="height: 90px; width: 100%; font-weight: 900;">
            </div>        
    `
    document.getElementById("ergebnisfeld01").innerHTML = `
    <div class="kopfrechenfeld nichtA">
        <d style="font-size: 5rem!important" id="aufgabenfeld">Aufgabe</d>
        <d style="font-size: 5rem!important">=</d>
    </div>
    <input type="text" class="inputergebniskopfrechnen" placeholder="Ergebnis" maxlength="8" id="ergebnisfeld" onkeyup="if(event.keyCode === 13) ueberpruefen();">
    `
}
else {
    document.getElementById("auswahlLevel").innerHTML = `
            <div style="width: 14%" class="nichtA">
                <span>
                    <d>Level:</d>
                </span>
            </div>
            <div style="width: 14%;">
                <d>0</d>
                <span>
                    <input type="radio" name = "clickzeit" value = "0" id="level0checked" onclick="level = 0; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>besondere Zahlen wie PI</d>
            </div>
            <div style="width: 14%">
                <d>2+</d>
                <span>
                    <input type="radio" name = "clickzeit" value = "2+" id="level2+checked" onclick="level = 22; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>kleines Einmaleins</d>
            </div>
            <div style="width: 14%">
                <span>
                    <d>1</d>
                </span>
                <span>
                    <input type="radio" name = "clickzeit"  value = "1" id="level1checked" onclick="level = 1; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>+/-: 0 - 100</d>
            </div>
            <div style="width: 14%">
                <span>
                    <d>2</d>
                </span>
                <span>
                    <input type="radio" name = "clickzeit" value = "2" id="level2checked" onclick="level = 2; reset();" style="width: 14px; height: 14px" checked>
                </span>
                <br>
                <d>+/-: -400 - 400
                    <br>
                    ×/÷: 0 - 100
                </d>
            </div>
            <div style="width: 15%">
                <span>
                    <d>3</d>
                </span>
                <span>
                    <input type="radio" name = "clickzeit" value = "3" id="level3checked" onclick="level = 3; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>+/-: -1000 - 1000
                    <br>
                    ×/÷: 400 - 400
                </d>
            </div>
            <div style="width: 15%" class="nichtA">
                <span><d>4</d></span>
                <span>
                    <input type="radio" name = "clickzeit" value = "4" id="level4checked" onclick="level = 4; reset();" style="width: 14px; height: 14px">
                </span>
                <br>
                <d>+/-: -5000 - 5000
                    <br>
                    ×/÷: 625 - 625
                </d>
            </div>
    `
    document.getElementById("auswahlLevel02").innerHTML = `
            <div style="width: 33.3%" class="nichtA">
                <span><d>automatischer</d></span><span><d>Levelaufstieg</d></span>
                <br>
                <span><input type="checkbox" id="autoPerformance" style="width: 1rem; height: 1rem;" checked></span>
            </div>
            <div style="width: 33.3%" class="nichtA">
                <input type="button" value = "NÄCHSTE" onclick="fehler++;neueaufgabe = true;" id="nextbutton" style="height: 90px; width: 100%; font-weight: 900;">
            </div>
            <div style="width: 33.3%" class="nichtA">
                <input type="button" value = "ABGEBEN" onclick="ueberpruefen()" id="startbutton" style="height: 90px; width: 100%; font-weight: 900;">
            </div>        
    `
    document.getElementById("ergebnisfeld01").innerHTML = `
    <div class="nichtA" style="width: 100%; border-top: 1px solid white">
        <d style="font-size: 5rem!important; width: 100%" id="aufgabenfeld">Aufgabe</d>
    </div>
    `
    document.getElementById("ergebnisfeld02").innerHTML = `
    <div class="nichtA">
        <d style="font-size: 5rem!important; width: 25%">=</d>
    </div>
    <input type="text" style="width: 75%" class="inputergebniskopfrechnen" placeholder="Ergebnis" maxlength="8" id="ergebnisfeld" onkeyup="if(event.keyCode === 13) ueberpruefen();">
    `
}