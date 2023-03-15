
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


var last = 0;//1: grundwert; 2: prozentwert; 3: prozentsatz
var last2 = 0;//1: grundwert; 2: prozentwert; 3: prozentsatz

function grundwert() {
    var grund = document.getElementById("groundvalue").value.replace(",", ".");
    var prozent = document.getElementById("percentvalue").value.replace(",", ".");
    var satz = document.getElementById("percentage").value.replace("%", "/100").replace(",", ".");
    if(grund[grund.length-1] == ".") return;
    else if(prozent[prozent.length-1] == ".") return;
    else if(satz[satz.length-1] == ".") return;
    var prozentzeichen = satz.replace("/100", "*0");
    if(prozentzeichen == "") ;
    else if(eval(prozentzeichen) == 0) prozentzeichen = 1;
    else prozentzeichen = 0;
    if(satz != "") satz = eval(satz);
    if(grund == "") {
        last = 0;
        document.getElementById("groundvalue").value = "";
        document.getElementById("percentvalue").value = "";
        document.getElementById("percentage").value = "";
        return;
    }
    if(last == 1) {
        last = last2;
    }
    else {
        last2 = last;
    }
    if(last == 2) {
        satz = prozent / grund;
        prozentzeichen = 1;
    }
    else if(last == 3) {
        prozent = grund * satz;
    }
    if(grund != "") grund = Math.round(grund*1000000) / 1000000;
    if(prozent != "") prozent = Math.round(prozent*1000000) / 1000000;
    if(satz != "") satz = Math.round(satz*100000000) / 1000000;
    document.getElementById("groundvalue").value = grund.toString().replace(".", ",");
    document.getElementById("percentvalue").value = prozent.toString().replace(".", ",");
    if(satz != "" && prozentzeichen == 1) document.getElementById("percentage").value = satz.toString().replace(".", ",")+"%";
    last = 1;
}

function prozentwert() {
    var grund = document.getElementById("groundvalue").value.replace(",", ".");
    var prozent = document.getElementById("percentvalue").value.replace(",", ".");
    var satz = document.getElementById("percentage").value.replace("%", "/100").replace(",", ".");
    if(grund[grund.length-1] == ".") return;
    else if(prozent[prozent.length-1] == ".") return;
    else if(satz[satz.length-1] == ".") return;
    var prozentzeichen = satz.replace("/100", "*0");
    if(prozentzeichen == "") ;
    else if(eval(prozentzeichen) == 0) prozentzeichen = 1;
    else prozentzeichen = 0;
    if(satz != "") satz = eval(satz);
    if(prozent == "") {
        last = 0;
        document.getElementById("groundvalue").value = "";
        document.getElementById("percentvalue").value = "";
        document.getElementById("percentage").value = "";
        return;
    }
    if(last == 2) {
        last = last2;
    }
    else {
        last2 = last;
    }
    if(last == 1) {
        satz = prozent / grund;
        prozentzeichen = 1;
    }
    else if(last == 3) {
        grund = prozent / satz;
    }
    if(grund != "") grund = Math.round(grund*1000000) / 1000000;
    if(prozent != "") prozent = Math.round(prozent*1000000) / 1000000;
    if(satz != "") satz = Math.round(satz*100000000) / 1000000;
    document.getElementById("groundvalue").value = grund.toString().replace(".", ",");
    document.getElementById("percentvalue").value = prozent.toString().replace(".", ",");
    if(satz != "" && prozentzeichen == 1) document.getElementById("percentage").value = satz.toString().replace(".", ",")+"%";
    last = 2;
}

function prozentsatz() {
    var grund = document.getElementById("groundvalue").value.replace(",", ".");
    var prozent = document.getElementById("percentvalue").value.replace(",", ".");
    var satz = document.getElementById("percentage").value.replace("%", "/100").replace(",", ".");
    if(grund[grund.length-1] == ".") return;
    else if(prozent[prozent.length-1] == ".") return;
    else if(satz[satz.length-1] == ".") return;
    var prozentzeichen = satz.replace("/100", "*0");
    if(prozentzeichen == "") ;
    else if(eval(prozentzeichen) == 0) prozentzeichen = 1;
    else prozentzeichen = 0;
    if(satz != "") satz = eval(satz);
    if(satz == "") {
        document.getElementById("groundvalue").value = "";
        document.getElementById("percentvalue").value = "";
        document.getElementById("percentage").value = "";
        last = 0;
        return;
    }
    if(last == 3) {
        last = last2;
    }
    else {
        last2 = last;
    }
    if(last == 1) {
        prozent = grund * satz;
    }
    else if(last == 2) {
        grund = prozent / satz;
    }     
    //alert(satz);
    if(grund != "") grund = Math.round(grund*1000000) / 1000000;
    if(prozent != "") prozent = Math.round(prozent*1000000) / 1000000;
    if(satz != "") satz = Math.round(satz*100000000) / 1000000;
    document.getElementById("groundvalue").value = grund.toString().replace(".", ",");
    document.getElementById("percentvalue").value = prozent.toString().replace(".", ",");
    if(satz != "" && prozentzeichen == 1) document.getElementById("percentage").value = satz.toString().replace(".", ",")+"%";
    last = 3;
}

function gradToFahrenheit(grad) {
    return 1.8*grad + 32;
}
function gradToKelvin(grad) {
    return 1.8*grad + 273.15;
}
function fahrenheitToGrad(fahrenheit) {
    return (fahrenheit - 32)*5/9;
}
function kelvinToGrad(kelvin) {
    return kelvin - 273.15;
}

function temperatur(eingabe) {//1: grad  2: kelvin  3: fahrenheit
    var grad = document.getElementById("gradcelsius").value.replace(",", ".");
    var kelvin = document.getElementById("kelvin").value.replace(",", ".");
    var fahrenheit = document.getElementById("gradfahrenheit").value.replace(",", ".");
    switch(eingabe) {
        case 1:
            document.getElementById("kelvin").value = gradToKelvin(grad);
            document.getElementById("gradfahrenheit").value = gradToFahrenheit(grad);
            break;
        case 2:
            document.getElementById("gradcelsius").value = kelvinToGrad(kelvin);
            document.getElementById("gradfahrenheit").value = gradToFahrenheit(kelvinToGrad(kelvin));
            break;
        case 3:
            document.getElementById("kelvin").value = gradToKelvin(fahrenheitToGrad(fahrenheit));
            document.getElementById("gradcelsius").value = fahrenheitToGrad(fahrenheit);
            break;
        default:
    }
    grad = document.getElementById("gradcelsius").value;
    kelvin = document.getElementById("kelvin").value;
    fahrenheit = document.getElementById("gradfahrenheit").value;
    if(grad == "" || kelvin == "" || fahrenheit == "") {
        document.getElementById("gradcelsius").value = "";
        document.getElementById("kelvin").value = "";
        document.getElementById("gradfahrenheit").value = "";
    }
    document.getElementById("gradcelsius").value = document.getElementById("gradcelsius").value.replace(".", ",");
    document.getElementById("kelvin").value = document.getElementById("kelvin").value.replace(".", ",");
    document.getElementById("gradfahrenheit").value = document.getElementById("gradfahrenheit").value.replace(".", ",");
}


function meterToInch(value) {
    return Math.round(value/0.0254*1000000)/1000000;
}
function meterToFeet(value) {
    return Math.round(value/0.3048*1000000)/1000000;
}
function meterToYard(value) {
    return Math.round(value/0.9144*1000000)/1000000;
}
function meterToMile(value) {
    return Math.round(value/1609.344*1000000)/1000000;
}

function inchToMeter(value) {
    return Math.round(value*0.0254*1000000)/1000000;
}
function feetToMeter(value) {
    return Math.round(value*0.3048*1000000)/1000000;
}
function yardToMeter(value) {
    return Math.round(value*0.9144*1000000)/1000000;
}
function mileToMeter(value) {
    return Math.round(value*1609.344*1000000)/1000000;
}

function laenge(eingabe) {//1: meter  2: inch  3: feet  4: meile  5: yard
    var meterF = document.getElementById("meter").value.replace(",", ".");
    var zollF = document.getElementById("zoll").value.replace(",", ".");
    var fussF = document.getElementById("fuss").value.replace(",", ".");
    var meileF = document.getElementById("meile").value.replace(",", ".");
    var yardF = document.getElementById("yard").value.replace(",", ".");
    switch(eingabe) {
        case 1:
            document.getElementById("zoll").value = meterToInch(meterF);
            document.getElementById("fuss").value = meterToFeet(meterF);
            document.getElementById("meile").value = meterToMile(meterF);
            document.getElementById("yard").value = meterToYard(meterF);
            break;
        case 2:
            document.getElementById("meter").value = inchToMeter(zollF);
            document.getElementById("fuss").value = meterToFeet(inchToMeter(zollF));
            document.getElementById("meile").value = meterToMile(inchToMeter(zollF));
            document.getElementById("yard").value = meterToYard(inchToMeter(zollF));
            break;
        case 3:
            document.getElementById("meter").value = feetToMeter(fussF);
            document.getElementById("zoll").value = meterToInch(feetToMeter(fussF));
            document.getElementById("meile").value = meterToMile(feetToMeter(fussF));
            document.getElementById("yard").value = meterToYard(feetToMeter(fussF));
            break;
        case 4:
            document.getElementById("meter").value = mileToMeter(meileF);
            document.getElementById("zoll").value = meterToInch(mileToMeter(meileF));
            document.getElementById("fuss").value = meterToFeet(mileToMeter(meileF));
            document.getElementById("yard").value = meterToYard(mileToMeter(meileF));
            break;
        case 5:
            document.getElementById("meter").value = yardToMeter(yardF);
            document.getElementById("zoll").value = meterToInch(yardToMeter(yardF));
            document.getElementById("fuss").value = meterToFeet(yardToMeter(yardF));
            document.getElementById("meile").value = meterToMile(yardToMeter(yardF));
            break;
        default:
    }
    meterF = document.getElementById("meter").value;
    zollF = document.getElementById("zoll").value;
    fussF = document.getElementById("fuss").value;
    meileF = document.getElementById("meile").value;
    yardF = document.getElementById("yard").value;
    if(meterF == "" || zollF == "" || fussF == "" || meileF == "" || yardF == "") {
        document.getElementById("meter").value = "";
        document.getElementById("zoll").value = "";
        document.getElementById("fuss").value = "";
        document.getElementById("meile").value = "";
        document.getElementById("yard").value = "";
    }
    document.getElementById("meter").value = document.getElementById("meter").value.replace(".", ",");
    document.getElementById("zoll").value = document.getElementById("zoll").value.replace(".", ",");
    document.getElementById("fuss").value = document.getElementById("fuss").value.replace(".", ",");
    document.getElementById("meile").value = document.getElementById("meile").value.replace(".", ",");
    document.getElementById("yard").value = document.getElementById("yard").value.replace(".", ",");
}

var intervalcolors = setInterval(function() {colors();}, 10);

function colors() {
    var hex = document.getElementById("favcolor").value.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");
    hex = hex.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");//?? aber nötig
    hex = hex.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");
    hex = hex.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");
    hex = hex.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");
    hex = hex.replace("a", "A").replace("b", "B").replace("c", "C").replace("d", "D").replace("e", "E").replace("f", "F");
    var r = hexadezimalTOdezimal(hex[1] + hex[2]);
    var g = hexadezimalTOdezimal(hex[3]+hex[4]);
    var b = hexadezimalTOdezimal(hex[5]+hex[6]);
    var rgb = r+" "+g+" "+b;
    var h = Math.round(rgbToHsl(r, g, b)[0]*10)/10;
    var s = Math.round(rgbToHsl(r, g, b)[1]*1000)/10;
    var l = Math.round(rgbToHsl(r, g, b)[2]*1000)/10;
    var hsl = h + " " + s + "%" + " " + l + "%";
    document.getElementById("rgb").innerHTML = rgb;
    document.getElementById("hsl").innerHTML = hsl;
    document.getElementById("hex").innerHTML = hex;
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }
    h *= 360;
    return [ h, s, l ];
  }