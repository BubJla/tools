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
    var ueberprueftLetzt = 0;
    if(eval(ersetzen(termL, "x", 0)) == eval(ersetzen(termR, "x", 0))) ergebnisse[0] = 0.000000;
    for(var i = 0.0001; i < 999999999999999; i*=1.01) {
        jetzt = new Date().getTime();
        if(jetzt-1000>t0)break;
        //console.log(i);
        n++;
        if((eval(ersetzen(term, "x", "i"))*(eval(ersetzen(term, "x", "grenzeP")))) < 0 || (Math.abs((eval(ersetzen(term, "x", "grenzeP")))) < 1 || Math.abs((eval(ersetzen(term, "x", "i")))) < 1) && Math.abs(i-ueberprueftLetzt) > 0.5) {
            ueberprueftLetzt = i;
            let ergebnis = gleichungGenau(term, grenzeP, i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = parseFloat(ergebnis);
        }
        if((eval(ersetzen(term, "x", "-1*i")))*(eval(ersetzen(term, "x", "grenzeN"))) < 0 || (Math.abs((eval(ersetzen(term, "x", "grenzeN")))) < 1 || Math.abs((eval(ersetzen(term, "x", "-i")))) < 1) && Math.abs(i-ueberprueftLetzt) > 0.5) {
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
        if(jetzt-3000>t0)break;
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
        /*for(let j = 0; j < intervalle.length; j++) {
            if(intervalle[j] >= 0) {
                for(let h = 0; h < j; h++) neg[neg.length] = intervalle[h];
                neg = neg.reverse();
                for(let h = j; h < intervalle.length; h++) pos[pos.length] = intervalle[h];
                for(let n = 0; n < intervalle.length; n++) {
                    if(neg[n] < neg.length) intervalle[n] = neg[n];
                    else intervalle[n] = pos[n-neg.length];
                }
                break;
            }
        }*/
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
            if(ergebnis != 'null' && ergebnis != 0) {
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
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = ersetzen(document.getElementById("ergebnisGleichung").value, ",", " / ");




    var inner = "";

    var xVerschiebung;
    var yVerschiebung;
    var xFaktor;//Abstand kleinster/ hoechster x Wert
    var yFaktor;//Abstand kleinster/ hoechster y Wert

    xFaktor = ((ergebnisse[ergebnisse.length-1]-ergebnisse[0])*1.7);
    if(xFaktor == 0) xFaktor = 1;
    xVerschiebung = -(ergebnisse[ergebnisse.length-1]+ergebnisse[0])/2*1000/xFaktor+500;
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
        if(mittelErgebnisse[0] != 0) yFaktor = 2*mittelErgebnisse[0];
        else {
            alert(mittelErgebnisse);
            yFaktor = 1;
        }
    }
    yVerschiebung = -(ergWerte[ergWerte.length-1]+ergWerte[0])/2*400/yFaktor+200;
    console.log("fak:");
    console.log("xV   "+xVerschiebung);
    console.log("yV    "+yVerschiebung);
    console.log("xF  "+xFaktor);
    console.log("yF    "+yFaktor);
    var trm = termL;
    /* xVerschiebung = 0;
     yVerschiebung = 0;
     xFaktor = 1000;//Abstand kleinster/ hoechster x Wert
     yFaktor = 400;//Abstand kleinster/ hoechster y Wert*/
    if(ergebnisse.length == 1) {
        xVerschiebung = -ergebnisse[0]/2*200+500;
        yVerschiebung = -rechnen(ergebnisse[0])/2*160+200;
        xFaktor = 10;//Abstand kleinster/ hoechster x Wert
        yFaktor = 5;//Abstand kleinster/ hoechster y Wert

    }
    for(let i = 0; i < 1000; i++) {
        //console.log(i);
        //console.log(inner.length);
        //console.log(inner);
        //console.log(rechnen(ersetzen(trm, "i", i)));
        //console.log(rechnen(ersetzen(trm, "i", i+1)));
        inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+1))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+1)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe1);stroke-width:3" />';
    }
    var trm = termR;
    for(let i = 0; i < 1000; i++) {
        //console.log(i);
        //console.log(inner.length);
        //console.log(inner);
        //console.log(rechnen(ersetzen(trm, "i", i)));
        //console.log(rechnen(ersetzen(trm, "i", i+1)));
        inner += '<line x1="'+rechnen((i))+'" y1="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" x2="'+rechnen((i+1))+'" y2="'+(400-(rechnen(ersetzen(trm, "x", (i-xVerschiebung+1)*xFaktor/1000)))*400/yFaktor-yVerschiebung)+'" style="stroke:var(--akzentfarbe2);stroke-width:3" />';
    }
    
    inner += '<line x1="0" y1="'+(400-yVerschiebung)+'" x2="1000" y2="'+(400-yVerschiebung)+'" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    inner += '<line x1="'+xVerschiebung+'" y1="0" x2="'+xVerschiebung+'" y2="400" style="stroke:var(--schriftfarbe);stroke-width:1" />';
    for(let k = 0; k < ergebnisse.length; k++) {
        inner += '<circle cx= "'+rechnen(ergebnisse[k]*1000/xFaktor+xVerschiebung)+'" cy= "'+(400-(rechnen(ersetzen(trm, "x", ergebnisse[k]*1000/xFaktor+xVerschiebung)))*400/yFaktor-yVerschiebung)+'" r= "5" style="fill: #F6D32D; stroke-width: 0px"/>';
    }
    document.getElementById("svgGraph").innerHTML = inner;
    }

//console.log("ejhhdscghgs:     "+gleichungGenau("(x)*(x-1)**2", 0.5, 999));
