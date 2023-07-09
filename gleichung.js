var breite = (screen.width)*0.84-52;

var xV = breite/2;
var xF = 50;
var yV = 200;
var yF = 25;
var gL;
var gR;
var e = [];

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
    if(ergebnis == Infinity) ergebnis = 999999999;
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
    for (let i = 0; i < termL.length; i++) termL = termL.replace("X", "x").replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*").replace("²", "**2").replace("³", "**3").replace("^", "**");
    var termR = rechts;
    for (let i = 0; i < termR.length; i++) termR = termR.replace("X", "x").replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*").replace("²", "**2").replace("³", "**3").replace("^", "**");
    var x;
    var ergebnisse = [];
    var unendlich = 0;
    var grenzeP = 0;
    var grenzeN = 0;
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
    termL = ersetzen(termL, "x(", "x*(");
    termL = ersetzen(termL, "PI", "Math.pi");
    termL = ersetzen(termL, "Math.pi", "Math.PI");
    termL = ersetzen(termL, ")(", ")*(");
    termL = ersetzen(termL, "x**", "(x)**");
    termL = ersetzen(termL, "cos(", "Math.COS(");//gegen unendlich Math.Math.Math....
    termL = ersetzen(termL, "sin(", "Math.SIN(");
    termL = ersetzen(termL, "tan(", "Math.TAN(");
    termL = ersetzen(termL, "Math.COS(", "Math.cos(");
    termL = ersetzen(termL, "Math.SIN(", "Math.sin(");
    termL = ersetzen(termL, "Math.TAN(", "Math.tan(");
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
    termR = ersetzen(termR, "x(", "x*(");
    termR = ersetzen(termR, ")(", ")*(");
    termR = ersetzen(termR, "PI", "Math.pi");
    termR = ersetzen(termR, "Math.pi", "Math.PI");
    termR = ersetzen(termR, "x**", "(x)**");
    termR = ersetzen(termR, ",", ".");
    termR = ersetzen(termR, "cos(", "Math.COS(");
    termR = ersetzen(termR, "sin(", "Math.SIN(");
    termR = ersetzen(termR, "tan(", "Math.TAN(");
    termR = ersetzen(termR, "Math.COS(", "Math.cos(");
    termR = ersetzen(termR, "Math.SIN(", "Math.sin(");
    termR = ersetzen(termR, "Math.TAN(", "Math.tan(");
    var term = termL+"-("+termR+")";
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
    e = ergebnisse;
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;



    //document.getElementById("svgGraph").innerHTML = inner;
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisse = "PI*n*2-0.5*PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q+0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisse = "PI*n*2+0.5*PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisse = "PI*n*2";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-Math.PI))) > 0.01) break;
        if(q == 9) ergebnisse = "PI*n*2-PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q-0.5*Math.PI))) > 0.01) break;
        if(q == 9) ergebnisse = "PI*n-0.5*PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisse = "PI*n";
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
    if(ergebnisse=="") ergebnisse = "keine oder zu große Lösung";

    if(ergebnisse.length > 5 && ergebnisse[0] != "2" && ergebnisse[0] != "P" && ergebnisse[0] != "k") ergebnisse = ergebnisse.sort(compareNumbersA);
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");
    e = ergebnisse;
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;
    refreshGraph();
}

//console.log("ejhhdscghgs:     "+gleichungGenau("(x)*(x-1)**2", 0.5, 999));

function refreshGraph() {
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
    /*console.log("xV:     "+xV);
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

    //console.log("yV  "+yV+"  xV  "+xV+"  yF  "+yF+"  xF  "+xF);

    var trm = termL;
    if(e == "unendlich viele Lösungen") {
        for(let i = 0; i < breite; i+=2) {
            inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe3);stroke-width:3" />';
        }
    }
    else {
        for(let i = 0; i < breite; i+=2) {
            inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe1);stroke-width:3" />';
        }
        trm = termR;
        for(let i = 0; i < breite; i+=2) {
            inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/breite)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe2);stroke-width:3" />';
        }
    }
    
    inner += '<line x1="0" y1="'+(400-yVerschiebung)+'" x2="'+breite+'" y2="'+(400-yVerschiebung)+'" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    inner += '<line x1="'+xVerschiebung+'" y1="0" x2="'+xVerschiebung+'" y2="400" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    if(ergebnisse.length != 26 && ergebnisse.length != 24) {
        for(let k = 0; k < ergebnisse.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse[k]*breite/xFaktor+xVerschiebung)+'" cy= "'+(400-eval(ersetzen(termL, "x", ergebnisse[k]))*400/yFaktor-yVerschiebung)+'" r= "4" style="fill: var(--akzentfarbe3); stroke-width: 0px"/>';
        }
        for(let k = 0; k < ergebnisse.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse[k]*breite/xFaktor+xVerschiebung)+'" cy= "'+(400-eval(ersetzen(termL, "x", ergebnisse[k]))*400/yFaktor-yVerschiebung)+'" r= "2" style="fill: var(--hintergrundfarbe); stroke-width: 0px"/>';
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
}
