function gleichung() {
    var links = document.getElementById("seiteL").value;
    var rechts = document.getElementById("seiteR").value;
    var ergebnisse = [];
    var termL = links.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*").replace("²", "**2").replace("³", "**3").replace("^", "**");
    for(let i = 0; i < termL.length; i++) termL = termL.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*").replace("²", "**2").replace("³", "**3").replace("^", "**");
    var termR = rechts.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*").replace("²", "**2").replace("³", "**3").replace("^", "**");
    for(let i = 0; i < termR.length; i++) termR = termR.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*").replace("²", "**2").replace("³", "**3").replace("^", "**");
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
        document.getElementById("ergebnisGleichung").value = "unendlich viele Lösungen";
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
    if(ergebnisse=="") ergebnisse = "keine oder zu große Lösung";
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = document.getElementById("ergebnisGleichung").value.replace(",", " / ");
}

//alert(Math.abs(eval(1/0)-eval(1/0)));
//alert(1/0==1/0);

//alert(ergebnisse.length);

//gleichung();
