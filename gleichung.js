var t0 = new Date().getTime();
for(let i = 0; i < 10000000; i++) {}
var t1 = new Date().getTime();
var score = (t1-t0);
var intval;

var counter99 = 0;
var breite = (window.innerWidth)*0.84-52;
var term;

var xV = breite/2;
var xF = 50;
var yV = 200;
var yF = 25;
var gL = "";
var gR;
var e = [];
var e2 = [];
var count = 0;
var mark = [];
var offsetx = 0;
var offsety = 0;

//alert(breite);
function ersetzen(text, zuErsetzen, ersetzwert) {
    var ergebnis = text;
    for(let n = 0; n < text.length; n++){
        ergebnis = ergebnis.replace(zuErsetzen, ersetzwert).replace("--", "+");
    }
    return ergebnis;
}

function toNum(text) {
    text = ersetzen(text, "0", 0);
    text = ersetzen(text, "1", 1);
    text = ersetzen(text, "2", 2);
    text = ersetzen(text, "3", 3);
    text = ersetzen(text, "4", 4);
    text = ersetzen(text, "5", 5);
    text = ersetzen(text, "6", 6);
    text = ersetzen(text, "7", 7);
    text = ersetzen(text, "8", 8); 
    text = ersetzen(text, "9", 9);
}

function runden(value, dezimal) {
    return (Math.round(value*10**dezimal)/10**dezimal);
}

function rechnen(term) {
    var ergebnis = eval(term);
    if(ergebnis == Infinity) ergebnis = 9999999;
    else if(ergebnis == NaN) ergebnis = 0;
    //else if(!(ergebnis < 0 || ergebnis >= 0)) ergebnis = 9999999;
    return ergebnis;
}

function gleichungGenau(term, grenzwert1, grenzwert2) {
    //console.log("neuer Aufruf");
    //console.log(term);
    //console.log("grenz:    " + grenzwert1 + "      "+grenzwert2);
    var ergebnis;
    var i = 0;
    var evtl = [];
    while(1) {
        ergebnis = (grenzwert1+grenzwert2)/2;
        //console.log("ergs:       "+ergebnis);
        //console.log("grenzw12:       "+grenzwert1+"           "+grenzwert2);
        //console.log("abw 1 2:       "+Math.abs(eval(ersetzen(term, "x", (3*grenzwert1+grenzwert2)/4))) + "      " + Math.abs(eval(ersetzen(term, "x", (grenzwert1+3*grenzwert2)/4))));
        //console.log("abw:       "+Math.abs(eval(ersetzen(term, "x", ergebnis))));
        i++;
        if(i > 500 || (ergebnis < 100 && i > 50)) {
            //console.log("n:      "+i);
            //console.log("ergebnis:      "+ergebnis);
            if(evtl.length > 1) return evtl[evtl.length-1]
            else return "null";
        }
        //console.log("uftfhg:     "+(ersetzen(term, "x", ergebnis)));
        if(Math.abs(eval(ersetzen(term, "x", ergebnis))) < 1/10**11) {
            //console.log("abw:       "+Math.abs(eval(ersetzen(term, "x", ergebnis))));
            return ergebnis.toFixed(9);
        }
        else if(Math.abs(eval(ersetzen(term, "x", ergebnis))) < 1/10**4 || (Math.abs(eval(ersetzen(term, "x", (3*grenzwert1+grenzwert2)/4))) == Math.abs(eval(ersetzen(term, "x", (grenzwert1+3*grenzwert2)/4))) && Math.abs(eval(ersetzen(term, "x", (grenzwert1+3*grenzwert2)/4)))<0.01)) {
            evtl[evtl.length] = ergebnis.toFixed(3);
        }
        //if(Math.abs(eval(ersetzen(term, "x", ergebnis))) > abwLetzt) //console.log("abw hoch:      " + ergebnis + "letzt Abw:     "+abwLetzt+"auswertung:     "+abwLetzt < 1/10000000000);
        if(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2)) == 0) return ((grenzwert1+grenzwert2)/2).toFixed(9);
        else if(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2))*eval(ersetzen(term, "x", grenzwert1)) < 0) {
            //console.log("1");
            grenzwert2 = (grenzwert1+grenzwert2)/2;
        }
        else if(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2))*eval(ersetzen(term, "x", grenzwert2)) < 0) {
            //console.log("2");
            grenzwert1 = (grenzwert1+grenzwert2)/2;
        }
        else {
            if(Math.abs(eval(ersetzen(term, "x", (grenzwert1*5+grenzwert2*4)/9)) <= Math.abs(eval(ersetzen(term, "x", (grenzwert1*4+grenzwert2*5)/9))))) {
                grenzwert2 = (grenzwert1+grenzwert2)/2;
            }
            else if(Math.abs(eval(ersetzen(term, "x", (grenzwert1*5+grenzwert2*4)/9)) > Math.abs(eval(ersetzen(term, "x", (grenzwert1*4+5*grenzwert2)/9))))) {
                grenzwert1 = (grenzwert1+grenzwert2)/2;
            }
        }
        abwLetzt = Math.abs(eval(ersetzen(term, "x", ergebnis)));
    }
}

function compareNumbers(a, b) {
    return a - b;
}
function compareNumbersA(a, b) {
    return Math.abs(a) - Math.abs(b);
}
  

function gleichung() {
    x0 = 0;
    y0 = 0;
    moving = false;

    document.getElementById("graph").setAttribute("style", "animation: none;");
    var xVerschiebung;
    var yVerschiebung;
    var xFaktor;//Abstand kleinster/ hoechster x Wert
    var yFaktor;//Abstand kleinster/ hoechster y Wert

    var t0 = new Date().getTime();
    var jetzt;
    var links = document.getElementById("seiteL").value;
    var rechts = document.getElementById("seiteR").value;
    var ergebnisse = [];
    var termL = links;
    var termR = rechts;
    var x;
    ergebnisse = [];
    var unendlich = 0;
    var grenzeP = 0;
    var grenzeN = 0;
    var ergebnisseAd = "";
    e2 = [];

    termL = ersetzen(termL, "X", "x");
    termL = ersetzen(termL, "Math.pi", "UUPPUU");
    termL = ersetzen(termL, "Math.PI", "UUPPUU");
    termL = ersetzen(termL, "PI", "UUPPUU");
    termL = ersetzen(termL, "pi", "UUPPUU");
    termL = ersetzen(termL, "UUPPUU", "Math.PI");
    termL = ersetzen(termL, "e", "Math.E");
    termL = ersetzen(termL, "÷", "/");
    termL = ersetzen(termL, "²", "**2");
    termL = ersetzen(termL, "³", "**3");
    termL = ersetzen(termL, "^", "**");
    termL = ersetzen(termL, "-x**", "-1*x**");

    termL = ersetzen(termL, "0x", "0*x");
    termL = ersetzen(termL, "1x", "1*x");
    termL = ersetzen(termL, "2x", "2*x");
    termL = ersetzen(termL, "3x", "3*x");
    termL = ersetzen(termL, "4x", "4*x");
    termL = ersetzen(termL, "5x", "5*x");
    termL = ersetzen(termL, "6x", "6*x");
    termL = ersetzen(termL, "7x", "7*x");
    termL = ersetzen(termL, "8x", "8*x");
    termL = ersetzen(termL, "9x", "9*x");
    termL = ersetzen(termL, "0(", "0*(");
    termL = ersetzen(termL, "1(", "1*(");
    termL = ersetzen(termL, "2(", "2*(");
    termL = ersetzen(termL, "3(", "3*(");
    termL = ersetzen(termL, "4(", "4*(");
    termL = ersetzen(termL, "5(", "5*(");
    termL = ersetzen(termL, "6(", "6*(");
    termL = ersetzen(termL, "7(", "7*(");
    termL = ersetzen(termL, "8(", "8*(");
    termL = ersetzen(termL, "9(", "9*(");
    termL = ersetzen(termL, "x(", "x*(");
    termL = ersetzen(termL, ")(", ")*(");
    termL = ersetzen(termL, "x**", "(x)**");
    termL = ersetzen(termL, "cos(", "Math.COS(");//gegen unendlich Math.Math.Math....
    termL = ersetzen(termL, "sin(", "Math.SIN(");
    termL = ersetzen(termL, "tan(", "Math.TAN(");
    termL = ersetzen(termL, "Math.COS(", "Math.cos(");
    termL = ersetzen(termL, "Math.SIN(", "Math.sin(");
    termL = ersetzen(termL, "Math.TAN(", "Math.tan(");

    termR = ersetzen(termR, "X", "x");
    termR = ersetzen(termR, "Math.pi", "UUPPUU");
    termR = ersetzen(termR, "Math.PI", "UUPPUU");
    termR = ersetzen(termR, "PI", "UUPPUU");
    termR = ersetzen(termR, "pi", "UUPPUU");
    termR = ersetzen(termR, "UUPPUU", "Math.PI");
    termR = ersetzen(termR, "e", "Math.E");
    termR = ersetzen(termR, "÷", "/");
    termR = ersetzen(termR, "²", "**2");
    termR = ersetzen(termR, "³", "**3");
    termR = ersetzen(termR, "^", "**");
    termR = ersetzen(termR, "-x**", "-1*x**");

    termR = ersetzen(termR, "0x", "0*x");
    termR = ersetzen(termR, "1x", "1*x");
    termR = ersetzen(termR, "2x", "2*x");
    termR = ersetzen(termR, "3x", "3*x");
    termR = ersetzen(termR, "4x", "4*x");
    termR = ersetzen(termR, "5x", "5*x");
    termR = ersetzen(termR, "6x", "6*x");
    termR = ersetzen(termR, "7x", "7*x");
    termR = ersetzen(termR, "8x", "8*x");
    termR = ersetzen(termR, "9x", "9*x");
    termR = ersetzen(termR, "0(", "0*(");
    termR = ersetzen(termR, "1(", "1*(");
    termR = ersetzen(termR, "2(", "2*(");
    termR = ersetzen(termR, "3(", "3*(");
    termR = ersetzen(termR, "4(", "4*(");
    termR = ersetzen(termR, "5(", "5*(");
    termR = ersetzen(termR, "6(", "6*(");
    termR = ersetzen(termR, "7(", "7*(");
    termR = ersetzen(termR, "8(", "8*(");
    termR = ersetzen(termR, "9(", "9*(");
    termR = ersetzen(termR, "x(", "x*(");
    termR = ersetzen(termR, ")(", ")*(");
    termR = ersetzen(termR, "x**", "(x)**");
    termR = ersetzen(termR, ",", ".");
    termR = ersetzen(termR, "cos(", "Math.COS(");
    termR = ersetzen(termR, "sin(", "Math.SIN(");
    termR = ersetzen(termR, "tan(", "Math.TAN(");
    termR = ersetzen(termR, "Math.COS(", "Math.cos(");
    termR = ersetzen(termR, "Math.SIN(", "Math.sin(");
    termR = ersetzen(termR, "Math.TAN(", "Math.tan(");
    term = termL+"-("+termR+")";
    //console.log(term);
    term = ersetzen(term, "x**x", "(x)**(x)");
    term = ersetzen(term, "x**", "(x)**");
    gL = termL;
    gR = termR;
    for(x = 10; x < 100; x++) {
        unendlich += Math.abs(eval(termL) - eval(termR)) < 0.000001;
    }
    if(unendlich == 90) {
        document.getElementById("ergebnisGleichung").value = "unendlich viele Lösungen";
        e = "unendlich viele Lösungen";
        xVerschiebung = breite/2;
        yVerschiebung = 200;
        xFaktor = 100;//Abstand kleinster/ hoechster x Wert
        yFaktor = 50;//Abstand kleinster/ hoechster y Wert
        refreshGraph();
        return;
    }
    //alert(term);
    if(eval(ersetzen(termL, "x", 0)) == eval(ersetzen(termR, "x", 0))) ergebnisse[0] = 0.000000;
    for(var i = 0.0001; i < 999999999999999; i*=1.01) {
        jetzt = new Date().getTime();
        if(jetzt-700>t0) break;
        //console.log(i);
        if((eval(ersetzen(term, "x", "i"))*(eval(ersetzen(term, "x", "grenzeP")))) < 0) {
            ueberprueftLetzt = i;
            let ergebnis = gleichungGenau(term, grenzeP, i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = parseFloat(ergebnis);
        }
        if((eval(ersetzen(term, "x", "-1*i")))*(eval(ersetzen(term, "x", "grenzeN"))) < 0) {
            ueberprueftLetzt = i;
            let ergebnis = gleichungGenau(term, grenzeN, -i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = parseFloat(ergebnis);
        }
        grenzeP = i;
        grenzeN = -i;
    }
    //alert(term);
    //console.log(jetzt-t0);
    ergebnisse = ergebnisse.sort(compareNumbers);
    //if(ergebnisse=="") ergebnisse = "keine oder zu große Lösung";


    xFaktor = ((ergebnisse[ergebnisse.length-1]-ergebnisse[0])*1.7);
    if(xFaktor == 0) xFaktor = 1;
    var ergWerte = [];
    for(let p = 0; p < ergebnisse.length; p++) {
        //alert(eval(ersetzen(termR, "x", ergebnisse[p])));
        ergWerte[ergWerte.length] = eval(ersetzen(termR, "x", ergebnisse[p]));
    }
    ergWerte = ergWerte.sort(compareNumbers);
    yFaktor = ((ergWerte[ergWerte.length-1]-ergWerte[0])*1.7);
    if(yFaktor == 0) {
        var mittelErgebnisse = [];
        for(let q = 0; q < ergebnisse.length-1; q++) mittelErgebnisse[mittelErgebnisse.length] = Math.abs(rechnen(ersetzen(term, "x", (ergebnisse[q]+ergebnisse[q+1])/2)));
        mittelErgebnisse = mittelErgebnisse.sort(compareNumbers);
        if(mittelErgebnisse[0] != 0) yFaktor = 2*mittelErgebnisse[0]+1;
        else {
            //alert(mittelErgebnisse);
            yFaktor = 1;
        }
    }
    xVerschiebung = -(ergebnisse[ergebnisse.length-1]+ergebnisse[0])/2*breite/xFaktor+breite/2;
    yVerschiebung = -(ergWerte[ergWerte.length-1]+ergWerte[0])/2*400/yFaktor+200;
    if(ergebnisse.length == 0  || ergebnisse.length == 26 || term == "Math.cos(x)-(1)") {//kein ergebniss
        xVerschiebung = breite/2;
        yVerschiebung = 200;
        xFaktor = 50;//Abstand kleinster/ hoechster x Wert
        yFaktor = 25;//Abstand kleinster/ hoechster y Wert
    }
    else if(ergebnisse.length == 1) {
        xVerschiebung = -(ergebnisse[0])/2*breite/10+breite/2;
        yVerschiebung = -(rechnen(ersetzen(termL, "x", ergebnisse[0])))/2*400/5+200;
        xFaktor = 20;//Abstand kleinster/ hoechster x Wert
        yFaktor = 10;//Abstand kleinster/ hoechster y Wert
    }
    else if(ergebnisse.length > 10) {
        xVerschiebung = breite/2;
        yVerschiebung = 200;
        xFaktor = 50;//Abstand kleinster/ hoechster x Wert
        yFaktor = 25;//Abstand kleinster/ hoechster y Wert
    }
    //if(yFaktor == 2000) yFaktor = 10;
    //if(xFaktor < 3) xFaktor = 3;
    //if(yFaktor < 3) yFaktor = 3;
    if(ergebnisse.length > 100) {
        ergebnisseAd = "Fehler: viele oder keine Lösung( "+ergebnisse.length+" Lösungen): ";
    }
    e = ergebnisse;
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;


    //document.getElementById("svgGraph").innerHTML = inner;
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisseAd = "PI*n*2-0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q+0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisseAd = "PI*n*2+0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n*2: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-Math.PI))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n*2-PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q-0.5*Math.PI))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n-0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n: ";
    }

    /*gefunden = false;
    for(let l = 0.01; l < 10; l+=0.01) {
        console.log(gefunden);
        if(gefunden == true) break;
        for(let q = 0; q < 10; q++) {
            if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q*l))) > 0.01) {
                break;
            }
            if(q == 9) {
                gefunden = true;
                ergebnisse = "PI*n*"+l.toFixed(2);
            }
        }      
    }*/
    /*for(let q = 0; q < 10; q++) {
        console.log(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))));
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) {
            break;
        }
        if(q == 9) ergebnisse = "0.5*PI*n";
    }*/
    //console.log(ergebnisse);
    //alert(Math.abs(rechnen(ersetzen(term, "x", -1))));
    if(ergebnisse=="" && !ergebnisseAd) ergebnisse = "keine oder zu große Lösung";

    if(ergebnisse.length > 5 && ergebnisse[0] != "2" && ergebnisse[0] != "P" && ergebnisse[0] != "k") ergebnisse = ergebnisse.sort(compareNumbersA);
    document.getElementById("ergebnisGleichung").value = ""+ergebnisseAd + ergebnisse;
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");
    e = ergebnisse;
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;
    mark = [];
    count ++;//f&uuml;r mehrmalige animation
    counter99=1;
}

function additional0() {

    document.getElementById("graph").setAttribute("style", "animation: none;");
    var xVerschiebung;
    var yVerschiebung;
    var xFaktor;//Abstand kleinster/ hoechster x Wert
    var yFaktor;//Abstand kleinster/ hoechster y Wert

    var t0 = new Date().getTime();
    var jetzt;
    var links = document.getElementById("seiteL").value;
    var rechts = document.getElementById("seiteR").value;
    var ergebnisse = [];
    var termL = links;
    var termR = rechts;
    var x;
    ergebnisse = [];
    var unendlich = 0;
    var grenzeP = 0;
    var grenzeN = 0;
    var ergebnisseAd = "";
    e2 = [];

    termL = ersetzen(termL, "X", "x");
    termL = ersetzen(termL, "Math.pi", "UUPPUU");
    termL = ersetzen(termL, "Math.PI", "UUPPUU");
    termL = ersetzen(termL, "PI", "UUPPUU");
    termL = ersetzen(termL, "pi", "UUPPUU");
    termL = ersetzen(termL, "UUPPUU", "Math.PI");
    termL = ersetzen(termL, "e", "Math.E");
    termL = ersetzen(termL, "÷", "/");
    termL = ersetzen(termL, "²", "**2");
    termL = ersetzen(termL, "³", "**3");
    termL = ersetzen(termL, "^", "**");
    termL = ersetzen(termL, "-x**", "-1*x**");

    termL = ersetzen(termL, "0x", "0*x");
    termL = ersetzen(termL, "1x", "1*x");
    termL = ersetzen(termL, "2x", "2*x");
    termL = ersetzen(termL, "3x", "3*x");
    termL = ersetzen(termL, "4x", "4*x");
    termL = ersetzen(termL, "5x", "5*x");
    termL = ersetzen(termL, "6x", "6*x");
    termL = ersetzen(termL, "7x", "7*x");
    termL = ersetzen(termL, "8x", "8*x");
    termL = ersetzen(termL, "9x", "9*x");
    termL = ersetzen(termL, "0(", "0*(");
    termL = ersetzen(termL, "1(", "1*(");
    termL = ersetzen(termL, "2(", "2*(");
    termL = ersetzen(termL, "3(", "3*(");
    termL = ersetzen(termL, "4(", "4*(");
    termL = ersetzen(termL, "5(", "5*(");
    termL = ersetzen(termL, "6(", "6*(");
    termL = ersetzen(termL, "7(", "7*(");
    termL = ersetzen(termL, "8(", "8*(");
    termL = ersetzen(termL, "9(", "9*(");
    termL = ersetzen(termL, "x(", "x*(");
    termL = ersetzen(termL, ")(", ")*(");
    termL = ersetzen(termL, "x**", "(x)**");
    termL = ersetzen(termL, "cos(", "Math.COS(");//gegen unendlich Math.Math.Math....
    termL = ersetzen(termL, "sin(", "Math.SIN(");
    termL = ersetzen(termL, "tan(", "Math.TAN(");
    termL = ersetzen(termL, "Math.COS(", "Math.cos(");
    termL = ersetzen(termL, "Math.SIN(", "Math.sin(");
    termL = ersetzen(termL, "Math.TAN(", "Math.tan(");

    termR = ersetzen(termR, "X", "x");
    termR = ersetzen(termR, "Math.pi", "UUPPUU");
    termR = ersetzen(termR, "Math.PI", "UUPPUU");
    termR = ersetzen(termR, "PI", "UUPPUU");
    termR = ersetzen(termR, "pi", "UUPPUU");
    termR = ersetzen(termR, "UUPPUU", "Math.PI");
    termR = ersetzen(termR, "e", "Math.E");
    termR = ersetzen(termR, "÷", "/");
    termR = ersetzen(termR, "²", "**2");
    termR = ersetzen(termR, "³", "**3");
    termR = ersetzen(termR, "^", "**");
    termR = ersetzen(termR, "-x**", "-1*x**");

    termR = ersetzen(termR, "0x", "0*x");
    termR = ersetzen(termR, "1x", "1*x");
    termR = ersetzen(termR, "2x", "2*x");
    termR = ersetzen(termR, "3x", "3*x");
    termR = ersetzen(termR, "4x", "4*x");
    termR = ersetzen(termR, "5x", "5*x");
    termR = ersetzen(termR, "6x", "6*x");
    termR = ersetzen(termR, "7x", "7*x");
    termR = ersetzen(termR, "8x", "8*x");
    termR = ersetzen(termR, "9x", "9*x");
    termR = ersetzen(termR, "0(", "0*(");
    termR = ersetzen(termR, "1(", "1*(");
    termR = ersetzen(termR, "2(", "2*(");
    termR = ersetzen(termR, "3(", "3*(");
    termR = ersetzen(termR, "4(", "4*(");
    termR = ersetzen(termR, "5(", "5*(");
    termR = ersetzen(termR, "6(", "6*(");
    termR = ersetzen(termR, "7(", "7*(");
    termR = ersetzen(termR, "8(", "8*(");
    termR = ersetzen(termR, "9(", "9*(");
    termR = ersetzen(termR, "x(", "x*(");
    termR = ersetzen(termR, ")(", ")*(");
    termR = ersetzen(termR, "x**", "(x)**");
    termR = ersetzen(termR, ",", ".");
    termR = ersetzen(termR, "cos(", "Math.COS(");
    termR = ersetzen(termR, "sin(", "Math.SIN(");
    termR = ersetzen(termR, "tan(", "Math.TAN(");
    termR = ersetzen(termR, "Math.COS(", "Math.cos(");
    termR = ersetzen(termR, "Math.SIN(", "Math.sin(");
    termR = ersetzen(termR, "Math.TAN(", "Math.tan(");
    term = termL+"-("+termR+")";
    //console.log(term);
    term = ersetzen(term, "x**x", "(x)**(x)");
    term = ersetzen(term, "x**", "(x)**");
    gL = termL;
    gR = termR;
    for(x = 10; x < 100; x++) {
        unendlich += Math.abs(eval(termL) - eval(termR)) < 0.000001;
    }
    if(unendlich == 90) {
        document.getElementById("ergebnisGleichung").value = "unendlich viele Lösungen";
        e = "unendlich viele Lösungen";
        xVerschiebung = breite/2;
        yVerschiebung = 200;
        xFaktor = 100;//Abstand kleinster/ hoechster x Wert
        yFaktor = 50;//Abstand kleinster/ hoechster y Wert
        refreshGraph();
        return;
    }
    //alert(term);
    if(eval(ersetzen(termL, "x", 0)) == eval(ersetzen(termR, "x", 0))) ergebnisse[0] = 0.000000;
    for(var i = 0.0001; i < 999999999999999; i*=1.01) {
        jetzt = new Date().getTime();
        if(jetzt-700>t0) break;
        //console.log(i);
        if((eval(ersetzen(term, "x", "i"))*(eval(ersetzen(term, "x", "grenzeP")))) < 0) {
            ueberprueftLetzt = i;
            let ergebnis = gleichungGenau(term, grenzeP, i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = parseFloat(ergebnis);
        }
        if((eval(ersetzen(term, "x", "-1*i")))*(eval(ersetzen(term, "x", "grenzeN"))) < 0) {
            ueberprueftLetzt = i;
            let ergebnis = gleichungGenau(term, grenzeN, -i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = parseFloat(ergebnis);
        }
        grenzeP = i;
        grenzeN = -i;
    }
    var gefunden;
    var intervalle = [];
    while(true) {
        jetzt = new Date().getTime();
        if(jetzt-1000>t0)break;
        neg = [];
        pos = [];
        intervalle = [];
        gefunden = false;
        for(let i = 0; i < ergebnisse.length; i++) {
            intervalle[i] = ergebnisse[i];
        }
        intervalle[intervalle.length] = -999999;
        intervalle[intervalle.length] = -999;
        intervalle[intervalle.length] = 999;
        intervalle[intervalle.length] = 999999;
        //alert(intervalle);
        intervalle = intervalle.sort(compareNumbers);
        //console.log(term);
        //console.log(intervalle);
        for(let s = 0; s < intervalle.length; s++) intervalle[s] = parseFloat(intervalle[s]);
        //console.log("ergebisssse:      "+ergebnisse.length);
        //console.log("length:     "+intervalle.length);
        for(let i = 1; i < intervalle.length; i++) {
            jetzt = new Date().getTime();
            //console.log("intval: 1 2   "+(intervalle[i-1]+0.5)+"       "+(intervalle[i]-0.5));
            //console.log("ergebnis");
            let ergebnis = gleichungGenau(term, (intervalle[i-1]+0.5), (intervalle[i]-0.5));
            if(jetzt-1200>t0)break;
            //console.log("erg:    "+ergebnis);
            //console.log(ergebnis);
            if(ergebnis > 0 || ergebnis <=0) {
                for(let u = 0; u < ergebnisse.length; u++) {
                    if(runden(ergebnis, 0) == runden(ergebnisse[u], 0)) ergebnis = 'null';
                }
            }
            if(ergebnis != 'null' && ergebnis != 0 && ergebnis != -999998.5 && ergebnis != 999998.5) {
                ergebnisse[ergebnisse.length] = runden(parseFloat(ergebnis), 3);
                //console.log("ergeb:      "+parseFloat(ergebnis).toFixed(3));
                //console.log("erge:     "+ergebnisse);
                //console.log("intval:     "+intervalle);
                gefunden = true;
            }
        }
        if(gefunden == false) break;
    }
    //console.log(jetzt-t0);
    ergebnisse = ergebnisse.sort(compareNumbers);
    //if(ergebnisse=="") ergebnisse = "keine oder zu groÃŸe Lösung";


    xFaktor = ((ergebnisse[ergebnisse.length-1]-ergebnisse[0])*1.7);
    if(xFaktor == 0) xFaktor = 1;
    var ergWerte = [];
    for(let p = 0; p < ergebnisse.length; p++) {
        //alert(eval(ersetzen(termR, "x", ergebnisse[p])));
        ergWerte[ergWerte.length] = eval(ersetzen(termR, "x", ergebnisse[p]));
    }
    ergWerte = ergWerte.sort(compareNumbers);
    yFaktor = ((ergWerte[ergWerte.length-1]-ergWerte[0])*1.7);
    if(yFaktor == 0) {
        var mittelErgebnisse = [];
        for(let q = 0; q < ergebnisse.length-1; q++) mittelErgebnisse[mittelErgebnisse.length] = Math.abs(rechnen(ersetzen(term, "x", (ergebnisse[q]+ergebnisse[q+1])/2)));
        mittelErgebnisse = mittelErgebnisse.sort(compareNumbers);
        if(mittelErgebnisse[0] != 0) yFaktor = 2*mittelErgebnisse[0]+1;
        else {
            //alert(mittelErgebnisse);
            yFaktor = 1;
        }
    }
    xVerschiebung = -(ergebnisse[ergebnisse.length-1]+ergebnisse[0])/2*breite/xFaktor+breite/2;
    yVerschiebung = -(ergWerte[ergWerte.length-1]+ergWerte[0])/2*400/yFaktor+200;
    if(ergebnisse.length == 0  || ergebnisse.length == 26 || term == "Math.cos(x)-(1)") {//kein ergebniss
        xVerschiebung = breite/2;
        yVerschiebung = 200;
        xFaktor = 50;//Abstand kleinster/ hoechster x Wert
        yFaktor = 25;//Abstand kleinster/ hoechster y Wert
    }
    else if(ergebnisse.length == 1) {
        xVerschiebung = -(ergebnisse[0])/2*breite/10+breite/2;
        yVerschiebung = -(rechnen(ersetzen(termL, "x", ergebnisse[0])))/2*400/5+200;
        xFaktor = 20;//Abstand kleinster/ hoechster x Wert
        yFaktor = 10;//Abstand kleinster/ hoechster y Wert
    }
    else if(ergebnisse.length > 10) {
        xVerschiebung = breite/2;
        yVerschiebung = 200;
        xFaktor = 50;//Abstand kleinster/ hoechster x Wert
        yFaktor = 25;//Abstand kleinster/ hoechster y Wert
    }
    //if(yFaktor == 2000) yFaktor = 10;
    //if(xFaktor < 3) xFaktor = 3;
    //if(yFaktor < 3) yFaktor = 3;
    if(ergebnisse.length > 100) {
        ergebnisseAd = "Fehler: viele oder keine Lösung( "+ergebnisse.length+" Lösungen): ";
    }
    e = ergebnisse;
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;


    //document.getElementById("svgGraph").innerHTML = inner;
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisseAd = "PI*n*2-0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q+0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisseAd = "PI*n*2+0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n*2: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-Math.PI))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n*2-PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q-0.5*Math.PI))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n-0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n: ";
    }

    /*gefunden = false;
    for(let l = 0.01; l < 10; l+=0.01) {
        console.log(gefunden);
        if(gefunden == true) break;
        for(let q = 0; q < 10; q++) {
            if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q*l))) > 0.01) {
                break;
            }
            if(q == 9) {
                gefunden = true;
                ergebnisse = "PI*n*"+l.toFixed(2);
            }
        }      
    }*/
    /*for(let q = 0; q < 10; q++) {
        console.log(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))));
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) {
            break;
        }
        if(q == 9) ergebnisse = "0.5*PI*n";
    }*/
    //console.log(ergebnisse);
    //alert(Math.abs(rechnen(ersetzen(term, "x", -1))));
    if(ergebnisse=="" && !ergebnisseAd) ergebnisse = "keine oder zu große Lösung";

    if(ergebnisse.length > 5 && ergebnisse[0] != "2" && ergebnisse[0] != "P" && ergebnisse[0] != "k") ergebnisse = ergebnisse.sort(compareNumbersA);
    document.getElementById("ergebnisGleichung").value = ""+ergebnisseAd + ergebnisse;
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");
    e = ergebnisse;
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;
    mark = [];
    refreshGraph();
    scroll(0, 1000);
    if(readCookie("animation") == 0) return;
    if(count %2 == 0) {
        document.getElementById("left").setAttribute("style", "animation: transition5 1500ms;");
        document.getElementById("under").setAttribute("style", "animation: transition5 1500ms;");
        document.getElementById("graph").setAttribute("style", "animation: transition5 1500ms ;");
    }
    else{
        document.getElementById("left").setAttribute("style", "animation: transition6 1500ms;");
        document.getElementById("under").setAttribute("style", "animation: transition6 1500ms;");
        document.getElementById("graph").setAttribute("style", "animation: transition6 1500ms ;");
    }
}

function additional() {
    var ergebnisse = e;
    if(!(ergebnisse[0] < 0 || ergebnisse[0] >= 0)) ergebnisse = [];
    //console.log("123");
    //console.log(ergebnisse);
    var mogErg = [];
    var accuracy0 = 1;
    var accuracy1 = 1000;
    var range = 99;
    var factor = 1;
    if(score < 5) range = 99999;
    else if(score < 50) range = 9999;
    else if(score < 500) range = 999;
    var exact = 0;
    if(ergebnisse.length==0) ergebnisse="null";
    var t0 = new Date().getTime();
    for(var u = 0; u < range; u += accuracy0) {

        let t1 = new Date().getTime();
        if(t1 - t0 > 10000) {
            alert("Laufzeitfehler!");
            return;
        }
        else if(t1 - t0 > 4000) {
            accuracy0 = 100;
            accuracy1 = 1;        
        }
        else if(t1 - t0 > 3000) {
            accuracy0 = 10;
            accuracy1 = 1;        
        }
        else if(t1 - t0 > 2000) {
            accuracy0 = 10;
            accuracy1 = 10;        
        }
        else if(t1 - t0 > 1000) {
            accuracy0 = 1;
            accuracy1 = 10;        
        }
        else if(t1 - t0 > 500) {
            accuracy0 = 1;
            accuracy1 = 100;
        }
        if(Math.abs(rechnen(ersetzen(term, "x", 1*u+accuracy0)))==0) {
            exact = 1;
            factor = 1;
            //alert(1*u+accuracy0);
            //console.log("e");
        }
        if(Math.abs(rechnen(ersetzen(term, "x", -1*u+accuracy0)))==0) {
            exact = 1;
            factor = -1;
            //alert(-1*u+accuracy0);
            //console.log("e");
        }
        if(Math.abs(rechnen(ersetzen(term, "x", 1*u))) < Math.abs(rechnen(ersetzen(term, "x", 1*u-accuracy0))) && Math.abs(rechnen(ersetzen(term, "x", 1*u))) < Math.abs(rechnen(ersetzen(term, "x", 1*u+accuracy0)))||exact==1) {
            //console.log(u+accuracy0);
            if(exact==1) {
                //console.log(u+accuracy0);
                for(let g = 0; g <= ergebnisse.length-1; g++) {
                    if(Math.abs(ergebnisse[g] - factor*u+accuracy0)<0.1 || ergebnisse[g] == factor*u+accuracy0) {
                        break;
                    }
                    if(g == ergebnisse.length-1) {
                        console.log(ergebnisse);
                        if(ergebnisse == "null") ergebnisse=[];
                        ergebnisse[ergebnisse.length] = parseInt(factor*u+accuracy0).toFixed(3);
                        console.log(ergebnisse);
                    }
                }
                exact = 0;
            }
            else {
                for(let f = 0; f < ergebnisse.length; f++) {
                    if(Math.abs(ergebnisse[f] - u) < 1) break;
                    if(f == ergebnisse.length-1) {
                        var minS = Math.abs(rechnen(ersetzen(term, "x", 1*u)));
                        var pos = -11.11111;
                        for(let s = u-accuracy0/2; s <= u+accuracy0/2; s+= 1/accuracy1) {
                            if(Math.abs(rechnen(ersetzen(term, "x", 1*s))) < minS) {
                                minS = Math.abs(rechnen(ersetzen(term, "x", 1*s)));
                                pos = s;
                            }
                        }
                        if(pos != -11.11111 && Math.abs(rechnen(ersetzen(term, "x", pos))) < 0.5) {
                            //console.log("m");
                            mogErg[mogErg.length] = pos.toFixed(3);
                        }
                    }
                }
            }
        }
        if(Math.abs(rechnen(ersetzen(term, "x", -1*u))) < Math.abs(rechnen(ersetzen(term, "x", -1*u-accuracy0))) && Math.abs(rechnen(ersetzen(term, "x", -1*u))) < Math.abs(rechnen(ersetzen(term, "x", -1*u+accuracy0)))) {
            for(let f = 0; f < ergebnisse.length; f++) {
                if(Math.abs(ergebnisse[f] + u) < 1) break;
                if(f == ergebnisse.length-1) {
                    var minS = Math.abs(rechnen(ersetzen(term, "x", -1*u)));
                    var pos = -11.11111;
                    for(let s = -u-accuracy0/2; s <= -u+accuracy0/2; s+= 1/accuracy1) {
                        if(Math.abs(rechnen(ersetzen(term, "x", 1*s))) < minS) {
                            minS = Math.abs(rechnen(ersetzen(term, "x", 1*s)));
                            pos = s;
                        }
                    }
                    if(pos != -11.11111 && Math.abs(rechnen(ersetzen(term, "x", pos))) < 0.5) {
                        mogErg[mogErg.length] = pos.toFixed(3);
                    }
                }
            }
        }
    }
    var ergebnisseAd = "";
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisseAd = "PI*n*2-0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q+0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisseAd = "PI*n*2+0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n*2: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-Math.PI))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n*2-PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q-0.5*Math.PI))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n-0.5*PI: ";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisseAd = "PI*n: ";
    }

    if(ergebnisse.length > 100 && ergebnisseAd.length==0) {
        ergebnisseAd = "Fehler: viele oder keine Lösung( "+ergebnisse.length+" Lösungen): ";
    }

    if(ergebnisse == "null") ergebnisse=[];
    if(ergebnisse!=document.getElementById("ergebnisGleichung").value&&ergebnisse.length!=0) {
        document.getElementById("ergebnisGleichung").value = ergebnisseAd+ergebnisse;
    }
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");
    //console.log(mogErg);
    if(mogErg.length == 0) return;
    document.getElementById("ergebnisGleichung").value += " ( "+(mogErg)+" ) ";
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");
    e2 = mogErg;
    refreshGraph();
}


function refreshGraph() {
    if(!(mark[0] < 0 || mark[0] >= 0)) mark = [];
    if(e == undefined) {
        e = "keine oder zu große Lösung";
        //alert(e);
    }
    if(e[0] == "P") {
        e = ersetzen(e, "PI", "Math.pi");
        e = ersetzen(e, "Math.pi", "Math.PI");
        var eNew = [];
        for(let i = 0; i < 25; i++) {
            eNew[eNew.length] = rechnen(ersetzen(e, "n", i));
            eNew[eNew.length] = rechnen(ersetzen(e, "n", -i));
        }
        e = eNew;
    }
    if(mark.length > 1) {
        var x = mark[0]*breite/xF+xV;
        var y = -mark[1]*400/yF-yV+400;
    
        xV += (breite/2-x)-offsetx;
        yV -= (200-y)-offsety;   
    }
    /*console.log("xM:     "+mark[0]);
    console.log("yM:     "+mark[1]);
    console.log("xV:     "+xV);
    console.log("xF:     "+xF);
    console.log("yV:     "+yV);
    console.log("yF:     "+yF);*/
    var ergebnisse = e;
    var xVerschiebung = xV;
    var yVerschiebung = yV;
    var xFaktor = xF;//Abstand kleinster/ hoechster x Wert
    var yFaktor = yF;//Abstand kleinster/ hoechster y Wert
    var termL = gL;
    var termR = gR;
    var inner = "";
    var innerU;
    var innerL;
    var ergebnisse2 = e2;

    //console.log("yV  "+yV+"  xV  "+xV+"  yF  "+yF+"  xF  "+xF);


    var trm = termL;
    if(e == "unendlich viele Lösungen") {
        for(let i = 0; i < breite; i+=2) {
            inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe3);stroke-width:3" />';
        }
    }
    else {
        if(document.getElementById("func0").checked == true) {
            trm = term;
            for(let i = 0; i < breite; i+=2) {
                if(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite))*rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)) < -100) continue;
                inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe3);stroke-width:1" />';
            }
        }
        trm = termL;
        for(let i = 0; i < breite; i+=2) {
            if(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite))*rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)) < -100) continue;
            inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe1);stroke-width:3" />';
        }
        trm = termR;
        for(let i = 0; i < breite; i+=2) {
            if(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite))*rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)) < -100) continue;
            inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe2);stroke-width:3" />';
        }
    }
    
    inner += '<line x1="0" y1="'+(400-yVerschiebung)+'" x2="'+breite+'" y2="'+(400-yVerschiebung)+'" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    inner += '<line x1="'+xVerschiebung+'" y1="0" x2="'+xVerschiebung+'" y2="400" style="stroke:var(--schriftfarbe);stroke-width:1" />';

    if(ergebnisse.length != 26 && ergebnisse.length != 24) {
        for(let k = 0; k < ergebnisse.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse[k]*breite/xFaktor+xVerschiebung)+'" cy= "'+(400-(eval(ersetzen(termL, "x", ergebnisse[k]))+eval(ersetzen(termR, "x", ergebnisse[k])))/2*400/yFaktor-yVerschiebung)+'" r= "4" style="fill: var(--akzentfarbe3); stroke-width: 0px"/>';
        }
        for(let k = 0; k < ergebnisse.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse[k]*breite/xFaktor+xVerschiebung)+'" cy= "'+(400-(eval(ersetzen(termL, "x", ergebnisse[k]))+eval(ersetzen(termR, "x", ergebnisse[k])))/2*400/yFaktor-yVerschiebung)+'" r= "2" style="fill: var(--hintergrundfarbe); stroke-width: 0px"/>';
        }
    }


    if(ergebnisse2.length != 26 && ergebnisse2.length != 24) {
        for(let k = 0; k < ergebnisse2.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse2[k]*breite/xFaktor+xVerschiebung)+'" cy= "'+(400-(eval(ersetzen(termL, "x", ergebnisse2[k]))+eval(ersetzen(termR, "x", ergebnisse2[k])))/2*400/yFaktor-yVerschiebung)+'" r= "4" style="fill: var(--schriftfarbe); stroke-width: 0px"/>';
        }
        for(let k = 0; k < ergebnisse2.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse2[k]*breite/xFaktor+xVerschiebung)+'" cy= "'+(400-(eval(ersetzen(termL, "x", ergebnisse2[k]))+eval(ersetzen(termR, "x", ergebnisse2[k])))/2*400/yFaktor-yVerschiebung)+'" r= "2" style="fill: var(--hintergrundfarbe); stroke-width: 0px"/>';
        }
    }


    innerU = '<g font-size="10" fill="white" stroke="var(--schriftfarbe)" text-anchor="middle">"';
    //alert(Math.round(Math.log10(xFaktor/2)-0.5));
    for(var a = 0; a < breite; a++) {
        let potenz = -Math.round(Math.log10((xFaktor)/3)-0.5);
        if(potenz < 0) potenz = 0;
        if((Math.abs(10**Math.round(Math.log10(xFaktor/3)-0.5)-(Math.abs((a-xVerschiebung)*xFaktor/breite)%(10**Math.round(Math.log10(xFaktor/3)-0.5)))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) || (Math.abs((a-xVerschiebung)*xFaktor/breite)%(10**Math.round(Math.log10(xFaktor/3)-0.5))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))) && !(Math.abs(10**Math.round(Math.log10(xFaktor/3)-0.5)-(Math.abs((a-xVerschiebung+1)*xFaktor/breite)%(10**Math.round(Math.log10(xFaktor/3)-0.5)))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) || (Math.abs((a-xVerschiebung+1)*xFaktor/breite)%(10**Math.round(Math.log10(xFaktor/3)-0.5))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)))) {
            inner += '<line x1="'+(a-(0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))/xFaktor*breite))+'" y1="0" x2="'+(a-(0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))/xFaktor*breite))+'" y2="400" style="stroke:rgb(125, 125, 125, 0.6);stroke-width:1" />';
            innerU += '<text x="'+(11+a-(0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))/xFaktor*breite))+'" y="10">'+(Math.round(((a-xVerschiebung)*xFaktor/breite)/10**Math.round(Math.log10(xFaktor/3)-0.5))*10**Math.round(Math.log10(xFaktor/3)-0.5).toFixed(potenz)).toFixed(potenz)+'</text>'
            //console.log("hhhhhhhh");
        }
    }
    innerU += '</g>';
    innerL = '<g font-size="10" fill="white" stroke="var(--schriftfarbe)" text-anchor="left">';
    for(a = 0; a < 400; a++) {
        let potenz = -Math.round(Math.log10(yFaktor/2)-0.5);
        if(potenz < 0) potenz = 0;
        let pot2 = Math.abs(Math.round(Math.log10(yFaktor/2)-0.5));
        if(pot2 == 0) {
            pot2 = 5;
        }
        //console.log("hffv       "+pot2);
        if((Math.abs(10**Math.round(Math.log10(yFaktor/2)-0.5)-(Math.abs((400-a-yVerschiebung)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5)))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5)) || (Math.abs((400-a-yVerschiebung)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))) && !(Math.abs(10**Math.round(Math.log10(yFaktor/2)-0.5)-(Math.abs((400-a-yVerschiebung+1)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5)))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5)) || (Math.abs((400-a-yVerschiebung+1)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5)))) {
            inner += '<line y1="'+((a+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400)))+'" x1="0" y2="'+((a+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400)))+'" x2="'+breite+'" style="stroke:rgb(125, 125, 125, 0.4);stroke-width:1" />';
            innerL += '<text x="'+(35-6*(pot2))+'" y="'+(a+9+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400))+'">'+Math.round(((400-a-yVerschiebung+1)/400*yFaktor)/10**Math.round(Math.log10(yFaktor/2)-0.5))*10**Math.round(Math.log10(yFaktor/2)-0.5).toFixed(potenz)+'</text>'
            //console.log("aaaaaaa");
        }
    }
    innerL += '</g>';
    document.getElementById("svgU").innerHTML = innerU;
    document.getElementById("svgL").innerHTML = innerL;

    document.getElementById("svgGraph").innerHTML = inner;
    graph_before = document.getElementById("svgGraph").innerHTML;

    const objSvg = document.getElementById("svgGraph");
    if(offsetx == (breite/2-(mark[0]*breite/xF+xV)) && offsety == (200-(-mark[1]*400/yF-yV+400)) || mark[1] == undefined) {
        objSvg.innerHTML += '<line x1="'+(breite/2-10)+'" y1="'+(200)+'" x2="'+(breite/2+10)+'" y2="'+(200)+'" style="stroke:var(--schriftfarbe);stroke-width:2" />';
        objSvg.innerHTML += '<line x1="'+(breite/2)+'" y1="'+(200-10)+'" x2="'+(breite/2)+'" y2="'+(200+10)+'" style="stroke:var(--schriftfarbe);stroke-width:2" />';
    }
    else {
        objSvg.innerHTML += '<line x1="'+(breite/2-10-offsetx)+'" y1="'+(200-offsety)+'" x2="'+(breite/2+10-offsetx)+'" y2="'+(200-offsety)+'" style="stroke:var(--schriftfarbe);stroke-width:2" />';
        objSvg.innerHTML += '<line x1="'+(breite/2-offsetx)+'" y1="'+(200-10-offsety)+'" x2="'+(breite/2-offsetx)+'" y2="'+(200+10-offsety)+'" style="stroke:var(--schriftfarbe);stroke-width:2" />';
    }
}

var graph_before = "";
var scrolled;

function coordinates(event) {
    //console.log("xV:     "+xV+"    yV:     "+yV);
    const obj = document.getElementById("graph");
    const objSvg = document.getElementById("svgGraph");
    var x0, y0;
    scrolled = window.scrollY;
    /*if(touch) {
        x0 = event.getX-obj.offsetLeft;
        y0 = event.getY-obj.offsetTop+scrolled;
    }
    else {*/
        x0 = event.clientX-obj.offsetLeft-2;
        y0 = event.clientY-obj.offsetTop+scrolled-2;
    //}
    var x = (x0-xV)*xF/breite;
    var y = -(y0-400+yV)*yF/400;

    let k = 0;//??????Fehlerbehebung
    let n = 0;
    let o = 0;
    let d = 0;
    let r = 0;
    let z = 0;
    let u = 0;
    let g = 0;
    let ß = 0;
    let L = 0;
    let ö = 0;
    let s = 0;
    if((e[0] < 0 || e[0] >= 0)) {
        for(let i = -1; i < e.length; i++) {
            if(i == -1) {
                dif = ((x0) - (xV))**2 + ((y0) - (400-yV))**2;
                //console.log("d+   "+dif);
                if(dif < 100) {
                    x = 0;
                    y = 0;
                }    
                continue;
            }
            dif = ((x0) - (e[i]*breite/xF+xV))**2 + ((y0) - (-eval(ersetzen(gL, "x", e[i]))*400/yF+400-yV))**2;
            if(dif < 100) {
                x = e[i];
                y = eval(ersetzen(gL, "x", e[i]));
            }
        }
    }
    mark[0] = x;
    mark[1] = y;
    x = x*breite/xF+xV;
    y = -y*400/yF-yV+400;
    //console.log("e:    "+(e[0]*breite/xF+xV));
    //console.log("x:   "+x+"   y:    "+y);
    objSvg.innerHTML = graph_before;
    objSvg.innerHTML += '<line x1="'+(x-10)+'" y1="'+y+'" x2="'+(x+10)+'" y2="'+y+'" style="stroke:var(--schriftfarbe);stroke-width:2" />';
    objSvg.innerHTML += '<line x1="'+x+'" y1="'+(y-10)+'" x2="'+x+'" y2="'+(y+10)+'" style="stroke:var(--schriftfarbe);stroke-width:2" />';
    var scroll = event.detail;
    if(scroll == 0) scroll = -event.wheelDelta/40;
    //console.log(scroll);
    //alert(touch);
    if(Math.abs(scroll) == 3 && touch==1) {
        xF*=1.5; yF*=1.5; xV=(xV-breite/2)/1.5+breite/2; yV=(yV-200)/1.5+200;    
    }
    if(scroll == 2) scroll = -3;
    //console.log("scrol:   "+scrolled);
    //alert(scroll);
    if(scroll < -2) {
        xF/=1.5; yF/=1.5; xV=(xV-breite/2)*1.5+breite/2; yV=(yV-200)*1.5+200;
    }
    else if(scroll > 2) {
        xF*=1.5; yF*=1.5; xV=(xV-breite/2)/1.5+breite/2; yV=(yV-200)/1.5+200;
    }
    if(scroll < -2 || scroll > 2) {
        offsetx = breite/2-x0;
        offsety = 200-y0;
        refreshGraph();
        document.getElementById("graph").removeEventListener('DOMMouseScroll', coordinates);
        document.getElementById("graph").removeEventListener('mousewheel', coordinates);
    }
    else{
        offsetx = 0;
        offsety = 0;
    }
}

var x0 = 0;
var y0 = 0;
var intval;
const obj = document.getElementById("graph");
const objSvg = document.getElementById("svgGraph");
var moving = false;
var graph0 = objSvg.innerHTML;
var touch = false;

function start(event) {
    /*if(event.clientY) touch = false;
    else if(event.getY) touch = true;*/
    /*if(touch) {
        x0 = event.getX-obj.offsetLeft;
        y0 = event.getY-obj.offsetTop;
    }
    else {*/
        x0 = event.clientX-obj.offsetLeft;
        y0 = event.clientY-obj.offsetTop;
    //}
    moving = true;
    graph0 = objSvg.innerHTML;
}

function end(event) {
    moving = false;
    var x, y;
    /*if(touch) {
        x = event.getX-obj.offsetLeft;
        y = event.getY-obj.offsetTop;
    }
    else {*/
        x = event.clientX-obj.offsetLeft;
        y = event.clientY-obj.offsetTop;
    //}
    if(Math.abs(x0 - x) < 15 && Math.abs(y0 - y) < 15) {
        coordinates(event);
        return;
    }
    xV -= x0 -x;
    yV += y0 -y;
    offsetx = (breite/2-(mark[0]*breite/xF+xV));
    offsety = (200-(-mark[1]*400/yF-yV+400));
    mark = [];
    refreshGraph();
    touch = false;
}

function print(event) {
    if(moving == false) return;
    objSvg.innerHTML = graph0;
    var x, y;
    /*if(touch) {
        x = event.getX-obj.offsetLeft;
        y = event.getY-obj.offsetTop;
    }
    else {*/
        x = event.clientX-obj.offsetLeft;
        y = event.clientY-obj.offsetTop;
    //}
    objSvg.innerHTML += '<line x1="'+(breite/2)+'" y1="'+(200)+'" x2="'+(breite/2-x+x0)+'" y2="'+(200-y+y0)+'" style="stroke:var(--schriftfarbe);stroke-width:3" />';
    objSvg.innerHTML += '<line x1="'+((breite/2-x+x0)-10)+'" y1="'+((200-y+y0))+'" x2="'+((breite/2-x+x0)+10)+'" y2="'+((200-y+y0))+'" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    objSvg.innerHTML += '<line x1="'+(breite/2-x+x0)+'" y1="'+(((200-y+y0))-10)+'" x2="'+(breite/2-x+x0)+'" y2="'+(((200-y+y0))+10)+'" style="stroke:var(--schriftfarbe);stroke-width:1" />';
}

function cpySolution() {
    var text = document.getElementById("ergebnisGleichung");
  
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText("x="+text.value);
}

//document.getElementById("graph").addEventListener('click', coordinates);
document.getElementById("graph").addEventListener('mousedown', start);
document.getElementById("graph").addEventListener('mouseup', end);
document.getElementById("graph").addEventListener('mousemove', print);
document.addEventListener('touchstart', function() {
    touch = true;
});

setInterval(function () {document.getElementById("graph").addEventListener('DOMMouseScroll', coordinates);}, 20);
setInterval(function () {document.getElementById("graph").addEventListener('mousewheel', coordinates);}, 10);

window.addEventListener("resize", function(event){
    breite = (window.innerWidth)*0.84-52;
    refreshGraph();
});
intval = setInterval(function() {
    if(counter99 == 1) {
        additional0();
        counter99 = 2;
    }
    else if(counter99 < 5 && counter99 != 0) counter99 ++;
    if(counter99 == 5) {
        var t0 = new Date().getTime();
        additional();
        counter99 = 99;
        var t1 = new Date().getTime();
        console.log(t1-t0);
    }
}, 200);

