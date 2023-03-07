var eingabe = "";
var ergebnis = 0;
var ergebnisletzt = 0;

function refreshEingabe() {
    document.getElementById("ausgabefeld").value = eingabe;
}

function eingabeTastatur() {
    var text = document.getElementById("ausgabefeld").value.replace("*", "×").replace("/", "÷").replace(".", ",");
    if(text.length < eingabe.length) {
        eingabe = "";
        for(let i = 0; i < text.length - 1; i++) eingabe += text[i] ;
    }
    if(text.length == eingabe.length) ;
    else {
        eingabe = "";
        for(let i = 0; i < text.length; i++) eingabe += text[i] ;
    }
    refreshEingabe();
}

function reset() {
    eingabe = "";
    refreshEingabe();
}

function loeschen() {
    var text = document.getElementById("ausgabefeld").value.replace("*", "×").replace("/", "÷");
    eingabe = "";
    for(let i = 0; i < text.length - 1; i++) eingabe += text[i] ;
    refreshEingabe();
}

function fak(zahl) {
    for(let i = 0; i < 100; i++) zahl = zahl.replace("×", "*").replace("÷", "/").replace(",", ".").replace("√(", "Math.sqrt(").replace("%", "*(1/100)").replace("ANS", ergebnisletzt).replace("²", "**2").replace("^", "**");
    for(let i = 0; i < 100; i++) zahl = ersetzen(zahl);
    zahl = eval(zahl);
    if(zahl < 0) return "NaN";
    var fakul = 1;
    for(let i = zahl; i > 0; i--) {
        fakul *= i;
    }
    return fakul;
}

function ersetzen(text) {
    text = text.replace("1(", "1*(").replace("2(", "2*(").replace("3(", "3*(").replace("4(", "4*(").replace("5(", "5*(").replace("6(", "6*(").replace("6(", "6*(").replace("7(", "7*(").replace("8(", "8*(").replace("9(", "9*(").replace("0(", "0*(").replace(")(", ")*(");
    for(var i = 0; i < text.length; i++) {
        if(text[i] == "!") {
            var fakultaetszahl = "";
            var j = i-1;
            var anzahlzu = 0;
            var anzahlauf = 0;
            while(1) {
                if(!(text[j] >= 0 && text[j] <= 9 || text[j] == "!" || text[j] == "(" || text[j] == ")" || anzahlauf != anzahlzu)) break;
                if(anzahlauf == anzahlzu && text[j] == "(") break;
                if(text[j] == ")") anzahlzu ++;
                if(text[j] == "(") anzahlauf ++;
                j--;
            }

            var anzahlauf = 0;

            j = i-1;

            while(1) {
                if(!(text[j] >= 0 && text[j] <= 9 || text[j] == "!" || anzahlauf != anzahlzu)) break;
                if(anzahlauf == anzahlzu && text[j]=="(") break;
                if(text[j] == "(") anzahlauf++;
                j--;
            }

            for(let n = 1; n < i - j; n++){
                fakultaetszahl += text[n+j];
            }
            text = text.replace(fakultaetszahl+"!", fak(fakultaetszahl));
        }
    }
    return text;
}

function result() {
    for(let i = 0; i < 100; i++) eingabe = ersetzen(eingabe);
    var formel = eingabe.replace("×", "*").replace("÷", "/").replace(",", ".").replace("√(", "Math.sqrt(").replace("%", "*(1/100)").replace("ANS", ergebnisletzt).replace("²", "**2").replace("^", "**");
    for(let i = 0; i < 100; i++) formel = formel.replace("×", "*").replace("÷", "/").replace(",", ".").replace("√(", "Math.sqrt(").replace("%", "*(1/100)").replace("ANS", ergebnisletzt).replace("²", "**2").replace("^", "**");
    let ergebnis = eval(formel).toString().replace(".", ",");
    document.getElementById("ausgabefeld").value = ergebnis;
    ergebnisletzt = ergebnis;
    eingabe = "ANS";
}
