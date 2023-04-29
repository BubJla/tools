
//var funktionsterm = "(1/Math.sqrt(2*Math.PI)*Math.E**(-0.5*x*x))";
var funktionsterm = "x";
var zeit;

function integral(xWert0, xWert1, genauigkeit = 10000) {
    if(genauigkeit < 10) genauigkeit = 10;
    var term = funktionsterm.replace("0", 0).replace("1", 1).replace("2", 2).replace("3", 3).replace("4", 4).replace("5", 5).replace("6", 6).replace("7", 7).replace("8", 8).replace("9", 9).replace("π", "Math.PI").replace("e", "Math.E").replace("÷", "/").replace("×", "*");
    var ergebnis = 0;
    var abstand = 1/genauigkeit;//kleiner: genauer
    for(var x = xWert0+abstand; x <= xWert1-abstand; x += abstand){
        ergebnis += eval(term)*abstand;
    }
    return Math.round(ergebnis*1000000000)/1000000000;
}

function zeitschätzung() {
    var t0 = new Date().getTime();
    integral(0, 1, 50000);
    var t1 = new Date().getTime();
    zeit = t1 - t0;
}

zeitschätzung();

var genau = 100000;
var wert0 = 0;
var wert1 = 3;

alert("zeitschätzung:"+genau/50000000*zeit*(wert1-wert0));

alert(integral(wert0, wert1, genau));
