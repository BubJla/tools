function ersetzen(text, zuErsetzen, ersetzwert) {
    var ergebnis = text;
    for(let n = 0; n < text.length; n++){
        ergebnis = ergebnis.replace(zuErsetzen, ersetzwert).replace("--", "+");
    }
    return ergebnis;
}


function gleichungGenau(term, grenzwert1, grenzwert2) {
    console.log("neuer Aufruf");
    console.log(term);
    console.log("grenz:    " + grenzwert1 + "      "+grenzwert2);
    var ergebnis;
    var i = 0;
    var abwLetzt;
    var evtl = [];
    while(1) {
        ergebnis = (grenzwert1+grenzwert2)/2;
        console.log("erg:       "+ergebnis);
        console.log("abw 1 2:       "+Math.abs(eval(ersetzen(term, "x", (3*grenzwert1+grenzwert2)/4))) + "      " + Math.abs(eval(ersetzen(term, "x", (grenzwert1+3*grenzwert2)/4))));
        console.log("abw:       "+Math.abs(eval(ersetzen(term, "x", ergebnis))));
        i++;
        if(i > 500) {
            console.log("n:      "+i);
            if(evtl.length > 1) return evtl[evtl.length-1]
            else return "null";
        }
        console.log("uftfhg:     "+(ersetzen(term, "x", ergebnis)));
        if(Math.abs(eval(ersetzen(term, "x", ergebnis))) < 1/10**10) {
            console.log("abw:       "+Math.abs(eval(ersetzen(term, "x", ergebnis))));
            return ergebnis.toFixed(9);
        }
        else if(Math.abs(eval(ersetzen(term, "x", ergebnis))) < 1/10**4 || Math.abs(eval(ersetzen(term, "x", (3*grenzwert1+grenzwert2)/4))) == Math.abs(eval(ersetzen(term, "x", (grenzwert1+3*grenzwert2)/4)))) {
            evtl[evtl.length] = ergebnis.toFixed(3);
        }
        if(Math.abs(eval(ersetzen(term, "x", ergebnis))) > abwLetzt) console.log("abw hoch:      " + ergebnis + "letzt Abw:     "+abwLetzt+"auswertung:     "+abwLetzt < 1/10000000000);
        if(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2)) == 0) return ((grenzwert1+grenzwert2)/2).toFixed(9);
        else if(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2))*eval(ersetzen(term, "x", grenzwert1)) < 0) {
            console.log("1");
            grenzwert2 = (grenzwert1+grenzwert2)/2;
        }
        else if(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2))*eval(ersetzen(term, "x", grenzwert2)) < 0) {
            console.log("2");
            grenzwert1 = (grenzwert1+grenzwert2)/2;
        }
        else {
            if(Math.abs(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2))*eval(ersetzen(term, "x", grenzwert1))) < Math.abs(eval(ersetzen(term, "x", (grenzwert1+grenzwert2)/2))*eval(ersetzen(term, "x", grenzwert2)))) {
                grenzwert2 = (grenzwert1+grenzwert2)/2;
            }
            else {
                grenzwert1 = (grenzwert1+grenzwert2)/2;
            }
        }
        abwLetzt = Math.abs(eval(ersetzen(term, "x", ergebnis)));
    }
}


function gleichung() {
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
    var term = termL+"-("+termR+")";
    term = ersetzen(term, "x**x", "(x)**(x)")
    term = ersetzen(term, "x**", "(x)**")
    for(x = 0; x < 100; x++) {
        unendlich += eval(termL) == eval(termR);
    }
    if(unendlich == 100) {
        document.getElementById("ergebnisGleichung").value = "unendlich viele Lösungen";
        return;
    }
    var n = 0;
    if(eval(ersetzen(termL, "x", 0)) == eval(ersetzen(termR, "x", 0))) ergebnisse[0] = 0;
    for(var i = 0.0001; i < 999999999999999; i*=1.01) {
        //console.log(i);
        n++;
        if((eval(ersetzen(term, "x", "i"))*(eval(ersetzen(term, "x", "grenzeP")))) < 0 || Math.abs(eval(ersetzen(term, "x", "i"))*(eval(ersetzen(term, "x", "grenzeP")))) < 0) {
            let ergebnis = gleichungGenau(term, grenzeP, i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = ergebnis;
        }
        if((eval(ersetzen(term, "x", "-1*i")))*(eval(ersetzen(term, "x", "grenzeN"))) < 0 || Math.abs(eval(ersetzen(term, "x", "-1*i"))*(eval(ersetzen(term, "x", "grenzeN")))) < 0) {
            let ergebnis = gleichungGenau(term, grenzeN, -i);
            if(ergebnis != "null") ergebnisse[ergebnisse.length] = ergebnis;
        }
        grenzeP = i;
        grenzeN = -i;
    }
    if(ergebnisse=="") ergebnisse = "keine oder zu große Lösung";
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = document.getElementById("ergebnisGleichung").value.replace(",", " / ");
    console.log(n);
}



function gleichung_alt() {
    var links = document.getElementById("seiteL").value;
    var rechts = document.getElementById("seiteR").value;
    var ergebnisse = [];
    var termL = links.replace("X", "x").replace("-", "-1*").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("Ãâ‚¬", "Math.PI").replace("e", "Math.E").replace("ÃƒÂ·", "/").replace("Ãƒâ€”", "*").replace("Ã‚Â²", "**2").replace("Ã‚Â³", "**3").replace("^", "**");
    for(let i = 0; i < termL.length; i++) termL = termL.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("Ãâ‚¬", "Math.PI").replace("e", "Math.E").replace("ÃƒÂ·", "/").replace("Ãƒâ€”", "*").replace("Ã‚Â²", "**2").replace("Ã‚Â³", "**3").replace("^", "**");
    var termR = rechts.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("Ãâ‚¬", "Math.PI").replace("e", "Math.E").replace("ÃƒÂ·", "/").replace("Ãƒâ€”", "*").replace("Ã‚Â²", "**2").replace("Ã‚Â³", "**3").replace("^", "**");
    for(let i = 0; i < termR.length; i++) termR = termR.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("Ãâ‚¬", "Math.PI").replace("e", "Math.E").replace("ÃƒÂ·", "/").replace("Ãƒâ€”", "*").replace("Ã‚Â²", "**2").replace("Ã‚Â³", "**3").replace("^", "**");
    var unterschied;
    var unterschiedLetzt = 999999999999;
    var werte = [];
    var ergebnisse = [];
    var seiteL, seiteR;
    var suchen = false;
    var unendlich = 0;
    for(var x = 0; x < 100; x++) {
        unendlich += eval(termL) == eval(termR);
    }
    if(unendlich == 100) {
        document.getElementById("ergebnisGleichung").value = "unendlich viele LÃƒÂ¶sungen";
        return;
    }


    for(let x = -99999; x < 99999; x++) {
        seiteL = eval(termL);
        seiteR = eval(termR);
        unterschied = Math.abs(seiteL-seiteR);
        if(unterschied < unterschiedLetzt) suchen = true;
        else if(unterschied > unterschiedLetzt && suchen == true) {
            werte[werte.length] = x-1;
            suchen = false;
        }
        else if(seiteL == seiteR) {
            werte[werte.length+1] = x;
            suchen = false;
        }
        unterschiedLetzt = unterschied;
    }
    for(let i = 0; i < werte.length; i++){
        unterschiedLetzt = 999999;
        for(let x = werte[i]-1; x < werte[i]+1; x+=0.0001) {
            seiteL = eval(termL);
            seiteR = eval(termR);
            unterschied = Math.abs(seiteL-seiteR);
            if(unterschied > unterschiedLetzt && unterschied < 0.2) {
                ergebnisse[ergebnisse.length] = (x-0.0001).toFixed(4);
                break;
            }
            unterschiedLetzt = unterschied;
        }
    }
    if(ergebnisse=="") ergebnisse = "keine oder zu groÃŸe LÃ¶sung";
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = document.getElementById("ergebnisGleichung").value.replace(",", " / ");
}

