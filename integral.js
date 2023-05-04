
//var funktionsterm = "(1/Math.sqrt(2*Math.PI)*Math.E**(-0.5*x*x))";
var funktionsterm = "x";
var zeit;

function integral2(xWert0, xWert1, genauigkeit = 10000) {
    if(genauigkeit < 10) genauigkeit = 10;
    var term = funktionsterm.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
    var ergebnis = 0;
    var abstand = 1/genauigkeit;//kleiner: genauer
    for(var x = xWert0+abstand; x <= xWert1-abstand; x += abstand){
        ergebnis += eval(term)*abstand;
    }
    return Math.round(ergebnis*1000)/1000;
}

function zeitschätzung() {
    var t0 = new Date().getTime();
    integral2(0, 1, 50000);
    var t1 = new Date().getTime();
    zeit = t1 - t0;
}

function ableitung2(xWert, genauigkeit = 10000) {
    var term = funktionsterm.replace("X", "x").replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
    let x = xWert-1/genauigkeit;
    let wert1 = eval(term)
    x = xWert+1/genauigkeit;
    let wert2 = eval(term)
    return ((wert2-wert1)/(2/genauigkeit));
}

function ableitung() {
    let wert = Number(document.getElementById("wert").value);
    funktionsterm = document.getElementById("termDifferential").value;
    document.getElementById("ergebnisDifferential").value = ableitung2(wert, 1000000);
}

function integral() {
    let grenze1 = Number(document.getElementById("grenzwert1").value);
    let grenze2 = Number(document.getElementById("grenzwert2").value);
    if(grenze1 > grenze2) {
        let value = grenze1;
        grenze1 = grenze2;
        grenze2 = value;
    }
    funktionsterm = document.getElementById("termIntegral").value;
    if(funktionsterm =="") return;
    var genauigkeit = 1000;
    let laenge = document.getElementById("grenzwert1").value.length + document.getElementById("grenzwert2").value.length;
    if(laenge > 8) genauigkeit = 0.0001;
    else if(laenge > 6) genauigkeit = 1;
    else if(laenge > 5) genauigkeit = 10;
    else if(laenge > 4) genauigkeit = 100;
    document.getElementById("ergebnisIntegral").value = integral2(grenze1, grenze2, genauigkeit);
}

