var xV;
var xF;
var yV;
var yF;


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
    if(ergebnis == Infinity) ergebnis = 1000;
    return ergebnis;
}

function gleichungGenau(term, grenzwert1, grenzwert2) {
    //console.log("neuer Aufruf");
    //console.log(term);
    //console.log("grenz:    " + grenzwert1 + "      "+grenzwert2);
    var ergebnis;
    var i = 0;
    var abwLetzt;
    var evtl = [];
    var intval10 = [];
    var min;
    var num;
    var anzahlIntervalle = 10;
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
        if(Math.abs(eval(ersetzen(term, "x", ergebnis))) < 1/10**10) {
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
  

function gleichung() {
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
    termL = ersetzen(termL, ")(", ")*(");
    termL = ersetzen(termL, "x**", "(x)**");
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
    termR = ersetzen(termR, "x**", "(x)**");
    var term = termL+"-("+termR+")";
    term = ersetzen(term, "x**x", "(x)**(x)");
    term = ersetzen(term, "x**", "(x)**");
    for(x = 0; x < 100; x++) {
        unendlich += eval(termL) == eval(termR);
    }
    if(unendlich == 100) {
        document.getElementById("ergebnisGleichung").value = "unendlich viele Lösungen";
        return;
    }
    var n = 0;
    if(eval(ersetzen(termL, "x", 0)) == eval(ersetzen(termR, "x", 0))) ergebnisse[0] = 0.000000;
    for(var i = 0.0001; i < 999999999999999; i*=1.01) {
        jetzt = new Date().getTime();
        if(jetzt-2000>t0) break;
        //console.log(i);
        n++;
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
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    var gefunden;
    var intervalle = [];
    while(true) {
        jetzt = new Date().getTime();
        if(jetzt-2000>t0)break;
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
            //console.log("intval: 1 2   "+(intervalle[i-1]+0.5)+"       "+(intervalle[i]-0.5));
            //console.log("ergebnis");
            let ergebnis = gleichungGenau(term, (intervalle[i-1]+0.5), (intervalle[i]-0.5));
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
    ergebnisse = ergebnisse.sort(compareNumbers);
    if(ergebnisse=="") ergebnisse = "keine oder zu große Lösung";




    var inner = "";

    var xVerschiebung;
    var yVerschiebung;
    var xFaktor;//Abstand kleinster/ hoechster x Wert
    var yFaktor;//Abstand kleinster/ hoechster y Wert

    xFaktor = ((ergebnisse[ergebnisse.length-1]-ergebnisse[0])*1.7);
    if(xFaktor == 0) xFaktor = 1;
    var ergWerte = [];
    for(let p = 0; p< ergebnisse.length; p++) {
        //alert(eval(ersetzen(termR, "x", ergebnisse[p])));
        ergWerte[ergWerte.length] = eval(ersetzen(termR, "x", ergebnisse[p]));
    }
    //ergWerte = ergWerte.sort(compareNumbers);
    yFaktor = ((ergWerte[ergWerte.length-1]-ergWerte[0])*1.7);
    if(yFaktor == 0) {
        var mittelErgebnisse = [];
        for(let q = 0; q < ergebnisse.length-1; q++) mittelErgebnisse[mittelErgebnisse.length] = Math.abs(rechnen(ersetzen(term, "x", (ergebnisse[q]+ergebnisse[q+1])/2)));
        mittelErgebnisse = mittelErgebnisse.sort(compareNumbers);
        if(mittelErgebnisse[0] != 0) yFaktor = 2*mittelErgebnisse[0]+1;
        else {
            alert(mittelErgebnisse);
            yFaktor = 1;
        }
    }
    var trm = termL;
    xVerschiebung = -(ergebnisse[ergebnisse.length-1]+ergebnisse[0])/2*1000/xFaktor+500;
    yVerschiebung = -(ergWerte[ergWerte.length-1]+ergWerte[0])/2*400/yFaktor+200;
    console.log(term);
    console.log(ergebnisse[0]);
    console.log(ergebnisse.length);
    if(ergebnisse.length == 26 || term == "Math.cos(x)-(1)") {//kein ergebniss
        xVerschiebung = 500;
        yVerschiebung = 200;
        xFaktor = 50;//Abstand kleinster/ hoechster x Wert
        yFaktor = 25;//Abstand kleinster/ hoechster y Wert

    }
    else if(ergebnisse.length == 1) {
        xVerschiebung = -(ergebnisse[0])/2*1000/10+500;
        yVerschiebung = -(rechnen(ersetzen(termL, "x", ergebnisse[0])))/2*400/5+200;
        xFaktor = 20;//Abstand kleinster/ hoechster x Wert
        yFaktor = 10;//Abstand kleinster/ hoechster y Wert
    }
    else if(ergebnisse.length > 10) {
        xVerschiebung = 500;
        yVerschiebung = 200;
        xFaktor = 50;//Abstand kleinster/ hoechster x Wert
        yFaktor = 25;//Abstand kleinster/ hoechster y Wert
    }
    if(yFaktor == 2000) yFaktor = 10;
    //alert(ergebnisse.length);
    if(xFaktor < 3) xFaktor = 3;
    if(yFaktor < 3) yFaktor = 3;
    //console.log("fak:");
    //console.log("xV   "+xVerschiebung);
    //console.log("yV    "+yVerschiebung);
    //console.log("xF  "+xFaktor);
    //console.log("yF    "+yFaktor);
    for(let i = 0; i < 1000; i+=2) {
        //console.log(i);
        //console.log(inner.length);
        //console.log(inner);
        //console.log(rechnen(ersetzen(trm, "i", i)));
        //console.log(rechnen(ersetzen(trm, "i", i+1)));
        inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe1);stroke-width:2" />';
    }
    var trm = termR;
    for(let i = 0; i < 1000; i+=2) {
        //console.log(i);
        //console.log(inner.length);
        //console.log(inner);
        //console.log(rechnen(ersetzen(trm, "i", i)));
        //console.log(rechnen(ersetzen(trm, "i", i+1)));
        inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+3))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+3)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe2);stroke-width:2" />';
    }
    
    inner += '<line x1="0" y1="'+(400-yVerschiebung)+'" x2="1000" y2="'+(400-yVerschiebung)+'" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    inner += '<line x1="'+xVerschiebung+'" y1="0" x2="'+xVerschiebung+'" y2="400" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    if(ergebnisse.length != 26) {
        for(let k = 0; k < ergebnisse.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse[k]*1000/xFaktor+xVerschiebung)+'" cy= "'+(400-eval(ersetzen(termL, "x", ergebnisse[k]))*400/yFaktor-yVerschiebung)+'" r= "4" style="fill: #F6D32D; stroke-width: 0px"/>';
        }
        for(let k = 0; k < ergebnisse.length; k++) {
            inner += '<circle cx= "'+rechnen(ergebnisse[k]*1000/xFaktor+xVerschiebung)+'" cy= "'+(400-eval(ersetzen(termL, "x", ergebnisse[k]))*400/yFaktor-yVerschiebung)+'" r= "2" style="fill: #000000; stroke-width: 0px"/>';
        }
    }
    var summe = 0;
    for (let r = 0; r <ergebnisse.length; r++) summe += ergebnisse[r];


    var innerU = '<g font-size="10" fill="white" stroke="var(--schriftfarbe)" text-anchor="middle">"';
    //alert(Math.round(Math.log10(xFaktor/2)-0.5));
    for(var a = -50; a < 1050; a++) {
        //console.log("vghgh");
        //console.log(Math.abs(10**Math.round(Math.log10(xFaktor/2)-0.5)-(Math.abs((a-xVerschiebung)*xFaktor/1000)%(10**Math.round(Math.log10(xFaktor/2)-0.5)))));
        //console.log(Math.round(Math.log10(xFaktor/2)-0.5));
        //console.log((a-xVerschiebung)*xFaktor/1000);
        //console.log(((a-xVerschiebung)*xFaktor/1000)%(10**Math.round(Math.log10(xFaktor/2)-0.5)));
        if((Math.abs(10**Math.round(Math.log10(xFaktor/3)-0.5)-(Math.abs((a-xVerschiebung)*xFaktor/1000)%(10**Math.round(Math.log10(xFaktor/3)-0.5)))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) || (Math.abs((a-xVerschiebung)*xFaktor/1000)%(10**Math.round(Math.log10(xFaktor/3)-0.5))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))) && !(Math.abs(10**Math.round(Math.log10(xFaktor/3)-0.5)-(Math.abs((a-xVerschiebung+1)*xFaktor/1000)%(10**Math.round(Math.log10(xFaktor/3)-0.5)))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) || (Math.abs((a-xVerschiebung+1)*xFaktor/1000)%(10**Math.round(Math.log10(xFaktor/3)-0.5))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)))) {
            inner += '<line x1="'+(a-(0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))/xFaktor*1000))+'" y1="0" x2="'+(a-(0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))/xFaktor*1000))+'" y2="400" style="stroke:rgb(255, 255, 255, 0.2);stroke-width:1" />';
            innerU += '<text x="'+(17+a-(0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))/xFaktor*1000))+'" y="10">'+(Math.round((a-xVerschiebung)*xFaktor/1000/(10**Math.round(Math.log10(xFaktor/3)-0.5)))*(10**Math.round(Math.log10(xFaktor/3)-0.5)))+'</text>'
            //console.log("hhhhhhhh");
        }
    }
    innerU += '</g>';
    var innerL = '<g font-size="10" fill="white" stroke="var(--schriftfarbe)" text-anchor="left">';
    for(a = -50; a < 450; a++) {
        //console.log("popopopo");
        //console.log(10**Math.round(Math.log10(yFaktor/2)-0.5));
        //console.log(Math.abs((400-a-yVerschiebung)/400*yFaktor));
        //if(((10**Math.round(Math.log10(yFaktor/2)-0.5))-(Math.abs((400-a-yVerschiebung)/400*yFaktor)) % (10**Math.round(Math.log10(yFaktor/2)-0.5)) < 0.5 || (Math.abs((400-a-yVerschiebung)/400*yFaktor)) % (10**Math.round(Math.log10(yFaktor/2)-0.5)) < 0.5) && !((10**Math.round(Math.log10(yFaktor/2)-0.5))-(Math.abs((400-a-yVerschiebung+1)/400*yFaktor)) % (10**Math.round(Math.log10(yFaktor/2)-0.5)) < 0.5 || (Math.abs((400-a-yVerschiebung+1)/400*yFaktor)) % (10**Math.round(Math.log10(yFaktor/2)-0.5)) < 0.5)) {
        //if((Math.abs(10**Math.round(Math.log10(xFaktor/3)-0.5)-(Math.abs((400-a-yVerschiebung)/400*yFaktor))%(10**Math.round(Math.log10(xFaktor/3)-0.5)))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) || (Math.abs((400-a-yVerschiebung)/400*yFaktor))%(10**Math.round(Math.log10(xFaktor/3)-0.5)) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) && !(Math.abs(10**Math.round(Math.log10(xFaktor/3)-0.5))-(Math.abs((400-a-yVerschiebung)/400*yFaktor))%(10**Math.round(Math.log10(xFaktor/3)-0.5))) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5)) || (Math.abs((400-a-yVerschiebung)/400*yFaktor))%(10**Math.round(Math.log10(xFaktor/3)-0.5)) < 0.1*(10**Math.round(Math.log10(xFaktor/3)-0.5))) {
        if((Math.abs(10**Math.round(Math.log10(yFaktor/2)-0.5)-(Math.abs((400-a-yVerschiebung)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5)))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5)) || (Math.abs((400-a-yVerschiebung)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))) && !(Math.abs(10**Math.round(Math.log10(yFaktor/2)-0.5)-(Math.abs((400-a-yVerschiebung+1)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5)))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5)) || (Math.abs((400-a-yVerschiebung+1)/400*yFaktor)%(10**Math.round(Math.log10(yFaktor/2)-0.5))) < 0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5)))) {
            inner += '<line y1="'+((a+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400)))+'" x1="0" y2="'+((a+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400)))+'" x2="1000" style="stroke:rgb(255, 255, 255, 0.14);stroke-width:1" />';
            if(Math.abs((Math.round((400-a-yVerschiebung+1)/400*yFaktor/(10**Math.round(Math.log10(yFaktor/2)-0.5)))*(10**Math.round(Math.log10(yFaktor/2)-0.5)))) != 0) {
                innerL += '<text x="'+(35-6*(Math.round(Math.log10(Math.abs((Math.round((400-a-yVerschiebung+1)/400*yFaktor/(10**Math.round(Math.log10(yFaktor/2)-0.5)))*(10**Math.round(Math.log10(yFaktor/2)-0.5)))))-0.5)))+'" y="'+(a+9+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400))+'">'+(Math.round((400-a-yVerschiebung+1)/400*yFaktor/(10**Math.round(Math.log10(yFaktor/2)-0.5)))*(10**Math.round(Math.log10(yFaktor/2)-0.5)))+'</text>'
            }
            else {
                innerL += '<text x="35" y="'+(a+9+(0.1*(10**Math.round(Math.log10(yFaktor/2)-0.5))/yFaktor*400))+'">'+(Math.round((400-a-yVerschiebung+1)/400*yFaktor/(10**Math.round(Math.log10(yFaktor/2)-0.5)))*(10**Math.round(Math.log10(yFaktor/2)-0.5)))+'</text>'
            }
            //console.log("aaaaaaa");
        }
    }
    innerL += '</g>';
    /*innerU += `<g font-size="10" font-family="sans-serif" fill="white" stroke="white"
    text-anchor="middle">
      <text x="10" y="10">0</text>
      <text x="110" y="10">1</text>
      <text x="210" y="10">2</text>
      <text x="310" y="10">3</text>
      <text x="410" y="10">4</text>
      <text x="510" y="10">5</text>
      <text x="610" y="10">6</text>
      <text x="710" y="10">7</text>
      <text x="810" y="10">8</text>
      <text x="910" y="10">9</text>
      <text x="1010" y="10">10</text>*/
    /*var innerL;
    innerL = `<g font-size="10" font-family="sans-serif" fill="white" stroke="white"
    text-anchor="middle">
      <text x="20" y="20">0</text>
      <text x="20" y="60">1</text>
      <text x="20" y="100">2</text>
      <text x="20" y="140">3</text>
      <text x="20" y="180">4</text>
      <text x="20" y="220">5</text>
      <text x="20" y="260">6</text>
      <text x="20" y="300">7</text>
      <text x="20" y="340">8</text>
      <text x="20" y="380">9</text>
      <text x="20" y="420">10</text>
    </g>`*/

    document.getElementById("svgU").innerHTML = innerU;
    document.getElementById("svgL").innerHTML = innerL;



    //alert(summe);
    //alert(((summe/ergebnisse.length)/ergebnisse[0])%1);
    document.getElementById("svgGraph").innerHTML = inner;
    /*if(((summe/ergebnisse.length)/ergebnisse[0])%1 < 1 && ergebnisse.length > 2) {
        for(let g = 0; g < 10; g++) {
            if(rechnen(ersetzen(term, "x", g*ergebnisse[1])) > 0.001) break;
            if(g == 9) console.log("1");
        }
    }*/
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisse = "2*PI*n-0.5*PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q+0.5*Math.PI))) > 0.001) break;
        if(q == 9) ergebnisse = "2*PI*n+0.5*PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisse = "2*PI*n";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", 2*Math.PI*q-Math.PI))) > 0.01) break;
        if(q == 9) ergebnisse = "2*PI*n-PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q-0.5*Math.PI))) > 0.01) break;
        if(q == 9) ergebnisse = "PI*n-0.5*PI";
    }
    for(let q = 0; q < 10; q++) {
        if(Math.abs(rechnen(ersetzen(term, "x", Math.PI*q))) > 0.01) break;
        if(q == 9) ergebnisse = "PI*n";
    }
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");
    xF = xFaktor;
    yF = yFaktor;
    xV = xVerschiebung;
    yV = yVerschiebung;
}

//console.log("ejhhdscghgs:     "+gleichungGenau("(x)*(x-1)**2", 0.5, 999));
