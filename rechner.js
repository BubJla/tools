var eingabe = "";

function eingabeKomma() {
    if(eingabe[eingabe.length-1] != ",") eingabe+=",";
}

function refreshEingabe() {
    document.getElementById("ausgabefeld").value = eingabe;
}

function eingabeTastatur() {
    var text = document.getElementById("ausgabefeld").value;// fehler löschen
    if(text.length < eingabe.length) {
        eingabe = "";
        for(let i = 0; i < text.length - 1; i++) eingabe += text[i];
    }
    if(text.length == eingabe.length) ;
    else if(!(text[text.length-1] >= 0 && text[text.length-1] <= 9)) ;
    else if(text[text.length-1] != "+") ;
    else if(text[text.length-1] != "-") ;
    else if(text[text.length-1] != "*") ;
    else if(text[text.length-1] != "/") ;
    else eingabe += text[text.length-1];
    refreshEingabe();
}