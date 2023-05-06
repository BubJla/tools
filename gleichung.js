function gleichung() {
    var links = document.getElementById("seiteL").value;
    var rechts = document.getElementById("seiteR").value;
    var ergebnisse = [];
    var termL = links.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
    for(let i = 0; i < termL.length; i++) termL = termL.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
    var termR = rechts.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
    for(let i = 0; i < termR.length; i++) termR = termR.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
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
        werte[0] = "unendlich";
        alert(werte);
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
        for(let x = werte[i]-1; x < werte[i]+1; x+=0.001) {
            seiteL = eval(termL);
            seiteR = eval(termR);
            unterschied = Math.abs(seiteL-seiteR);
            //console.log(unterschied);
            if(unterschied > unterschiedLetzt) {
                ergebnisse[ergebnisse.length] = x.toFixed(2);
                break;
            }
            unterschiedLetzt = unterschied;
        }
    }
    if(ergebnisse=="") ergebnisse = "kein Ergebnis";
    document.getElementById("ergebnisGleichung").value = ergebnisse;
    document.getElementById("ergebnisGleichung").value = document.getElementById("ergebnisGleichung").value.replace(",", " / ");
}

//alert(Math.abs(eval(1/0)-eval(1/0)));
//alert(1/0==1/0);

//alert(ergebnisse.length);

//gleichung();
