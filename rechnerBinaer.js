
function binaerTOdezimal(binaercode) {
    var dezimalzahlOut = 0;
    for(let i = 0; i < binaercode.length; i++) {
        dezimalzahlOut += Math.pow(2, i)*binaercode[binaercode.length-i-1];
    }
    return dezimalzahlOut;
}

function hexadezimalTOdezimal(hexadezimalcode) {
    var dezimalzahlOut = 0;
    var stellenzahl;
    for(let i = 0; i < hexadezimalcode.length; i++) {
        switch(hexadezimalcode[hexadezimalcode.length-i-1]){
            case "A":
                stellenzahl = 10;
                break;
            case "B":
                stellenzahl = 11;
                break;
            case "C":
                stellenzahl = 12;
                break;
            case "D":
                stellenzahl = 13;
                break;
            case "E":
                stellenzahl = 14;
                break;
            case "F":
                stellenzahl = 15;
                break;
            default:
                stellenzahl = hexadezimalcode[hexadezimalcode.length-i-1];
                break;
        }

        dezimalzahlOut += Math.pow(16, i)*stellenzahl;
    }
    return dezimalzahlOut;
}

function dezimalTObinaer(dezimalzahl){
    var binaercode = "";
    var laenge = Math.round(Math.log2(dezimalzahl)-0.5)+1;
    for(let i = 0; i < laenge; i++) {
        if(Math.round(dezimalzahl/Math.pow(2, (laenge-i-1))-0.5) == 0) binaercode += "0";
        else {
            binaercode += "1";
            dezimalzahl -= Math.pow(2, (laenge-i-1));
        }
    }
    return binaercode;

}

function dezimalTOhexadezimal(dezimalzahl){
    var hexadezimalcode = "";
    var laenge = Math.round(Math.log2(dezimalzahl)/4-0.5)+1;
    for(let i = 0; i < laenge; i++) {
        switch(Math.round(dezimalzahl/Math.pow(16, (laenge-i-1))-0.5)){
            case 0: 
                hexadezimalcode += "0";
                break;
            case 1: 
                hexadezimalcode += "1";
                dezimalzahl -= Math.pow(16, (laenge-i-1));
                break;
            case 2: 
                hexadezimalcode += "2";
                dezimalzahl -= 2*Math.pow(16, (laenge-i-1));
                break;
            case 3: 
                hexadezimalcode += "3";
                dezimalzahl -= 3*Math.pow(16, (laenge-i-1));
                break;
            case 4: 
                hexadezimalcode += "4";
                dezimalzahl -= 4*Math.pow(16, (laenge-i-1));
                break;
            case 5: 
                hexadezimalcode += "5";
                dezimalzahl -= 5*Math.pow(16, (laenge-i-1));
                break;
            case 6: 
                hexadezimalcode += "6";
                dezimalzahl -= 6*Math.pow(16, (laenge-i-1));
                break;
            case 7: 
                hexadezimalcode += "7";
                dezimalzahl -= 7*Math.pow(16, (laenge-i-1));
                break;
            case 8: 
                hexadezimalcode += "8";
                dezimalzahl -= 8*Math.pow(16, (laenge-i-1));
                break;
            case 9: 
                hexadezimalcode += "9";
                dezimalzahl -= 9*Math.pow(16, (laenge-i-1));
                break;
            case 10: 
                hexadezimalcode += "A";
                dezimalzahl -= 10*Math.pow(16, (laenge-i-1));
                break;
            case 11: 
                hexadezimalcode += "B";
                dezimalzahl -= 11*Math.pow(16, (laenge-i-1));
                break;
            case 12: 
                hexadezimalcode += "C";
                dezimalzahl -= 12*Math.pow(16, (laenge-i-1));
                break;
            case 13: 
                hexadezimalcode += "D";
                dezimalzahl -= 13*Math.pow(16, (laenge-i-1));
                break;
            case 14: 
                hexadezimalcode += "E";
                dezimalzahl -= 14*Math.pow(16, (laenge-i-1));
                break;
            case 15: 
                hexadezimalcode += "F";
                dezimalzahl -= 15*Math.pow(16, (laenge-i-1));//hätte man auch einheitlich machen können aber erst zu spät darauf gestossen
                break;         
        }
    }
 return hexadezimalcode;

}

function binaercodeeingabe() {
    var inhalt = document.getElementById("binaercode").value;
    if(inhalt == '') {
        document.getElementById("hexadezimalcode").value = "";
        document.getElementById("binaercode").value = "";
        document.getElementById("dezimalzahl").value = "";
        return;
    }
    for(var j = 0; j < inhalt.length; j++) {
        if(inhalt[j] == "0" || inhalt[j] == "1") {
            if(j == inhalt.length-1){
                document.getElementById("dezimalzahl").value = binaerTOdezimal(inhalt);
                document.getElementById("hexadezimalcode").value = dezimalTOhexadezimal(binaerTOdezimal(inhalt));
            }
        }
        else {
            var zwischeninhalt = inhalt;
            inhalt = "";
            for(let i = 0; i < j; i++) {
                inhalt += zwischeninhalt[i];
            }
        }
    }
    document.getElementById("binaercode").value = inhalt;
}

function hexadezimalcodeeingabe() {
    var inhalt = document.getElementById("hexadezimalcode").value.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");
    if(inhalt == '') {
        document.getElementById("hexadezimalcode").value = "";
        document.getElementById("binaercode").value = "";
        document.getElementById("dezimalzahl").value = "";
        return;
    }
    for(var j = 0; j < inhalt.length; j++) {
        if((inhalt[j] < 10 || inhalt[j] < "G" && inhalt[j] >= "A") && inhalt[j] != " ") {
            if(j == inhalt.length-1){
                document.getElementById("dezimalzahl").value = hexadezimalTOdezimal(inhalt);
                document.getElementById("binaercode").value = dezimalTObinaer(hexadezimalTOdezimal(inhalt));
            }
        }
        else {
            var zwischeninhalt = inhalt;
            inhalt = "";
            for(let i = 0; i < j; i++) {
                inhalt += zwischeninhalt[i];
            }
        }
    }
    document.getElementById("hexadezimalcode").value = inhalt;
}

function dezimalzahleingabe() {
    var inhalt = document.getElementById("dezimalzahl").value;
    if(inhalt == '') {
        document.getElementById("hexadezimalcode").value = "";
        document.getElementById("binaercode").value = "";
        document.getElementById("dezimalzahl").value = "";
        return;
    }
    for(var j = 0; j < inhalt.length; j++) {
        if(inhalt[j] < 10 && inhalt[j] != " ") {
            if(j == inhalt.length-1){
                document.getElementById("binaercode").value = dezimalTObinaer(inhalt);
                document.getElementById("hexadezimalcode").value = dezimalTOhexadezimal((inhalt));
            }
        }
        else {
            var zwischeninhalt = inhalt;
            inhalt = "";
            for(let i = 0; i < j; i++) {
                inhalt += zwischeninhalt[i];
            }
        }
    }
    document.getElementById("dezimalzahl").value = inhalt;
}
