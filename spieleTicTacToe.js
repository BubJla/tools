var zug = 1;
var felder = [0, -1, -2, -3, -4, -5 ,-6, -7, -8, -9];//X: 1   O:2//felder[0]: modi: 0:freund 1: leicht 2: mittel 3: unbesiegbarSpielerAnfangend 3: unbesiegbarComputerAnfangend
var interval = 0;
var gestartet = 0;
var gewinnBeteiligte = [0, 0, 0];
var zug_letzt = 0;
var gZug1; // 1. Zug des gegners wenn computer beginnt


function resetRandom(){//den Zufall zufälliger machen
    var date = new Date().getSeconds();
    for(let i = 0; i < date; i++) Math.random();
}

function setFeld1(){
    if(felder[1] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld1").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[1] = 1;
    }
    else  {
        document.getElementById("feld1").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'
        felder[1] = 2;
    }
    zug ++;
}

function setFeld2(){
    if(felder[2] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld2").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[2] = 1;
    }
    else {
        document.getElementById("feld2").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'
        felder[2] = 2;
    }
    zug ++;
}

function setFeld3(){
    if(felder[3] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld3").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[3] = 1;
    }
    else  {
        document.getElementById("feld3").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'
        felder[3] = 2;
    }
    zug ++;
}

function setFeld4(){
    if(felder[4] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld4").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[4] = 1;
    }
    else  {
        document.getElementById("feld4").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'
        felder[4] = 2;
    }
    zug ++;
}

function setFeld5(){
    if(felder[5] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld5").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[5] = 1;
    }
    else  {
        document.getElementById("feld5").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'
        felder[5] = 2;
    }
    zug ++;
}

function setFeld6(){
    if(felder[6] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld6").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[6] = 1;
    }
    else  {
        document.getElementById("feld6").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>' 
        felder[6] = 2;
    }
    zug ++;
}

function setFeld7(){
    if(felder[7] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld7").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[7] = 1;
    }
    else  {
        document.getElementById("feld7").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'  
        felder[7] = 2;
    }
    zug ++;
}

function setFeld8(){
    if(felder[8] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld8").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[8] = 1;
    }
    else  {
        document.getElementById("feld8").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>' 
        felder[8] = 2;
    }
    zug ++;
}

function setFeld9(){
    if(felder[9] > 0 || gestartet == 0) return;
    if(zug%2 == 1) {
        document.getElementById("feld9").innerHTML= '<svg> <polygon points= "5, 5, 145, 145"/><polygon points= "5, 145, 145, 5"/></svg>'
        felder[9] = 1;
    }
    else  {
        document.getElementById("feld9").innerHTML= '<svg><circle cx= "75" cy= "75" r= "70"/></svg>'
        felder[9] = 2;
    }
    zug ++;
    //window.alert(felder);
}

function printFeld(sollFeld){
    if(felder[0] > 2) {
        if(zug == 1) gZug1 = sollFeld;
        zug_letzt = sollFeld;
    }
    switch(sollFeld){
        case 1:
            setFeld1();
            break;
        case 2:
            setFeld2();
            break;
        case 3:
            setFeld3();
            break;
        case 4:
            setFeld4();
            break;
        case 5:
            setFeld5();
            break;
        case 6:
            setFeld6();
            break;
        case 7:
            setFeld7();
            break;
        case 8:
            setFeld8();
            break;
        case 9:
            setFeld9();
            break;
    }
}

function Computerzug(){
    var feld = -99;
    if(zug > 9) return;
    if(felder[0] == 0 || zug%2 == 1) return;
    else if(felder[0] == 1){//leicht
        do{
            feld = Math.round(Math.random()*9);
        }while(felder[feld] > 0)
    }
    else if(felder[0] == 2) {//mittel
        for(let i = 1; i < 8; i+=3) {//erkennung, ob gewonnen werden kann//horizontal
            if(felder[i] == felder[i+1] && felder[i+2] == -(i+2)) feld = i+2;
            else if(felder[i] == felder[i+2] && felder[i+1] == -(i+1)) feld = i+1;
            else if(felder[i+2] == felder[i+1] && felder[i] == -i) feld = i;
        }
        for(let i = 1; i < 4; i++) {//erkennung, ob gewonnen werden kann//vertikal
            if(felder[i] == felder[i+3] && felder[i+6] == -(i+6)) feld = i+6;
            else if(felder[i] == felder[i+6] && felder[i+3] == -(i+3)) feld = i+3;
            else if(felder[i+3] == felder[i+6] && felder[i] == -i) feld = i;
        }
        for(let i = 1; i < 4; i++) {//erkennung, ob gewonnen werden kann//diagonal
            if(felder[i] == felder[5] && felder[10-i] == -(10-i)) feld = 10-i;
            else if(felder[i] == felder[10-i] && felder[5] == -5) feld = 5;
            else if(felder[10-i] == felder[5] && felder[i] == -i) feld = i;
        }
        if(feld == -99) {
            do{
                feld = Math.round(Math.random()*9);
            }while(felder[feld] > 0)     
        }
    }
    else if(felder[0] == 3) {
        feld = verteidigung();
    }
    else if(felder[0] == 4) {
        feld = strategie1();
    }
    //fehlend unbesiegbar spieler
    printFeld(feld);
}

function gewinnMarkierung(){
    for(let i = 0; i < 3; i++){
        switch(gewinnBeteiligte[i]){
        case 1:
            document.getElementById("feld1").setAttribute("class", "feldGewonnen");
            break;
        case 2:
            document.getElementById("feld2").setAttribute("class", "feldGewonnen");
            break;
        case 3:
            document.getElementById("feld3").setAttribute("class", "feldGewonnen");
            break;
        case 4:
            document.getElementById("feld4").setAttribute("class", "feldGewonnen");
            break;
        case 5:
            document.getElementById("feld5").setAttribute("class", "feldGewonnen");
            break;
        case 6:
            document.getElementById("feld6").setAttribute("class", "feldGewonnen");
            break;
        case 7:
            document.getElementById("feld7").setAttribute("class", "feldGewonnen");
            break;
        case 8:
            document.getElementById("feld8").setAttribute("class", "feldGewonnen");
            break;
        case 9:
            document.getElementById("feld9").setAttribute("class", "feldGewonnen");
            break;
        }
    }
}

function strategie1() {
    var feld;
    for(var i = 1; i < 4; i++) { // diagonal computer
        if(felder[i] == 2 && felder[5] == 2 && felder[10-i] == -(10-i)) {
            feld = 10-i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[5] == 2 && felder[10-i] == 2 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 2 && felder[10-i] == 2 && felder[5] == -5) {
            feld = 5;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 8; i += 3) { // vertikal computer
        if(felder[i] == 2 && felder[i+1] == 2 && felder[i+2] == -(i+2)) {
            feld = i+2;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+1] == 2 && felder[i+2] == 2 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 2 && felder[i+2] == 2 && felder[i+1] == -(i+1)) {
            feld = i+1;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 4; i++) { // horizontal computer
        if(felder[i] == 2 && felder[i+3] == 2 && felder[i+6] == -(i+6)) {
            feld = i+6;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+3] == 2 && felder[i+6] == 2 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 2 && felder[i+6] == 2 && felder[i+3] == -(i+3)) {
            feld = i+3;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 4; i++) { // diagonal gegner
        if(felder[5] == 1 && felder[i] == 1 && felder[10-i] == -(10-i)) {
            feld = 10-i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[5] == 1 && felder[10-i] == 1 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 1 && felder[10-i] == 1 && felder[5] == -5) {
            feld = 5;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 8; i += 3) { // vertikal gegner
        if(felder[i] == 1 && felder[i+1] == 1 && felder[i+2] == -(i+2)) {
            feld = i+2;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+1] == 1 && felder[i+2] == 1 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 1 && felder[i+2] == 1 && felder[i+1] == -(i+1)) {
            feld = i+1;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 4; i++) { // horizontal gegner
        if(felder[i] == 1 && felder[i+3] == 1 && felder[i+6] == -(i+6)) {
            feld = i+6;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+3] == 1 && felder[i+6] == 1 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 1 && felder[i+6] == 1 && felder[i+3] == -(i+3)) {
            feld = i+3;
            zug_letzt = feld;
            return feld;
        }
    }
    if(zug == 0) feld = 1;
    else if(zug_letzt == 5) feld = 9;
    else if(gZug1%2 == 0 && felder[5] == -5) feld = 5;
    else if(gZug1%2 == 0) {
        if(felder[2] == -2) feld = 3;
        else feld = 7;
    }
    else if(felder[9] == -9) feld = 9;
    else if(felder[3] == -3) feld = 3;
    else if(felder[7] == -7) feld = 7;
    zug_letzt = feld;
    return feld;
}

function verteidigung() {
    var feld = zug_letzt;
    for(var i = 1; i < 4; i++) { // diagonal computer
        if(felder[i] == 2 && felder[5] == 2 && felder[10-i] == -(10-i)) {
            feld = 10-i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[5] == 2 && felder[10-i] == 2 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 2 && felder[10-i] == 2 && felder[5] == -5) {
            feld = 5;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 8; i += 3) { // vertikal computer
        if(felder[i] == 2 && felder[i+1] == 2 && felder[i+2] == -(i+2)) {
            feld = i+2;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+1] == 2 && felder[i+2] == 2 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 2 && felder[i+2] == 2 && felder[i+1] == -(i+1)) {
            feld = i+1;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 4; i++) { // horizontal computer
        if(felder[i] == 2 && felder[i+3] == 2 && felder[i+6] == -(i+6)) {
            feld = i+6;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+3] == 2 && felder[i+6] == 2 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 2 && felder[i+6] == 2 && felder[i+3] == -(i+3)) {
            feld = i+3;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 4; i++) { // diagonal gegner
        if(felder[5] == 1 && felder[i] == 1 && felder[10-i] == -(10-i)) {
            feld = 10-i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[5] == 1 && felder[10-i] == 1 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 1 && felder[10-i] == 1 && felder[5] == -5) {
            feld = 5;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 8; i += 3) { // vertikal gegner
        if(felder[i] == 1 && felder[i+1] == 1 && felder[i+2] == -(i+2)) {
            feld = i+2;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+1] == 1 && felder[i+2] == 1 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 1 && felder[i+2] == 1 && felder[i+1] == -(i+1)) {
            feld = i+1;
            zug_letzt = feld;
            return feld;
        }
    }

    for(var i = 1; i < 4; i++) { // horizontal gegner
        if(felder[i] == 1 && felder[i+3] == 1 && felder[i+6] == -(i+6)) {
            feld = i+6;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i+3] == 1 && felder[i+6] == 1 && felder[i] == -i) {
            feld = i;
            zug_letzt = feld;
            return feld;
        }
        else if(felder[i] == 1 && felder[i+6] == 1 && felder[i+3] == -(i+3)) {
            feld = i+3;
            zug_letzt = feld;
            return feld;
        }
    }





    if(felder[2] == 1 && felder[4] == 1 && felder[1] == -1 && felder[3] == -3 && felder[7] == -7) {//Sonderfälle
        feld = 1;
        zug_letzt = feld;
        return feld;
    }
    if(felder[2] == 1 && felder[6] == 1 && felder[1] == -1 && felder[3] == -3 && felder[9] == -9) {
        feld = 3;
        zug_letzt = feld;
        return feld;
    }
    if(felder[8] == 1 && felder[4] == 1 && felder[9] == -9 && felder[7] == -7 && felder[1] == -1) {
        feld = 7;
        zug_letzt = feld;
        return feld;
    }
    if(felder[8] == 1 && felder[6] == 1 && felder[7] == -7 && felder[9] == -9 && felder[3] == -3) {
        feld = 9;
        zug_letzt = feld;
        return feld;
    }
    while(1){
        if(feld > 9) feld = 0;
        if(zug == 2 && felder[5] == -5) feld = 5;
        else if(zug == 2) feld = 1;
        else if(zug_letzt > 5 && felder[5] == 1) feld -= 2;
        else if(zug_letzt > 5) feld -= 1;
        else if(felder[5] == 1) feld += 2;
        else feld ++;
        if(felder[feld] == -feld) {
            zug_letzt = feld;
            return feld;
        }
        else continue;
    }



    zug_letzt = feld;
    return feld;
}

function gewinnerkennung(){
    for(let i = 1; i < 4; i++) {
        if(felder[i] == felder[i+3] && felder[i] == felder[i+6]) {
            gewinnBeteiligte[0] = i;
            gewinnBeteiligte[1] = i+3;
            gewinnBeteiligte[2] = i+6;
            gestartet = 0;
            gewinnMarkierung();
            return 1;//vertikal
        }
        else if(felder[i] == felder[5] && felder[i] == felder[10-i]) {
            gewinnBeteiligte[0] = i;
            gewinnBeteiligte[1] = 10-i;
            gewinnBeteiligte[2] = 5;
            gestartet = 0;
            gewinnMarkierung();
            return 1;//diagonal
        }
    }
    for(let i = 1; i < 8; i += 3) {
        if(felder[i] == felder[i+1] && felder[i]== felder[i+2]) {
            gewinnBeteiligte[0] = i;
            gewinnBeteiligte[1] = i+1;
            gewinnBeteiligte[2] = i+2;
            gestartet = 0;
            gewinnMarkierung();
            return 1;//horizontal
        }
    }
    return 0;
}

function start() {
    resetRandom();
    document.getElementById("beginnerIch").setAttribute("disabled", "");
    document.getElementById("beginnerGegner").setAttribute("disabled", "");
    document.getElementById("schwierigkeitLeicht").setAttribute("disabled", "");
    document.getElementById("schwierigkeitMittel").setAttribute("disabled", "");
    document.getElementById("schwierigkeitUnbesiegbar").setAttribute("disabled", "");
    document.getElementById("gegnerFreund").setAttribute("disabled", "");
    document.getElementById("gegnerComputer").setAttribute("disabled", "");
    document.getElementById("startfeld").setAttribute("disabled", "");
    gestartet = 1;
    if(document.getElementById("gegnerComputer").checked == true && document.getElementById("schwierigkeitLeicht").checked == true) felder[0] = 1;
    else if(document.getElementById("gegnerComputer").checked == true && document.getElementById("schwierigkeitMittel").checked == true) felder[0] = 2;
    else if(document.getElementById("gegnerComputer").checked == true && document.getElementById("schwierigkeitUnbesiegbar").checked == true && document.getElementById("beginnerIch").checked == true) felder[0] = 3;
    else if(document.getElementById("gegnerComputer").checked == true && document.getElementById("schwierigkeitUnbesiegbar").checked == true && document.getElementById("beginnerGegner").checked == true) felder[0] = 4;
    if(document.getElementById("beginnerGegner").checked == true) zug--;
    interval = setInterval(function() {gewinnerkennung();Computerzug();}, 1);
}
