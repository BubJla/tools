var laenge = 8;


function generatePassword() {
    var erlaubt = "";
    var buchstaben = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";//ohne O und 0
    var zahlen = "123456789123456789";//doppelt um sie häufiger zu machen
    var zeichen = "!#$%&*()+}{[]?></-="
    if(document.getElementById("buchstaben").checked == true) erlaubt += buchstaben;
    if(document.getElementById("zahlen").checked == true) erlaubt += zahlen;
    if(document.getElementById("zeichen").checked == true) erlaubt += zeichen;
    if(document.getElementById("buchstaben").checked == true);
    else if(document.getElementById("zahlen").checked == true);
    else if(document.getElementById("zeichen").checked == true);
    else erlaubt = " "
    if(laenge == 99) laenge = document.getElementById("variabelLaenge").value;

    let password = "";
    for (let i = 0; i < laenge; i++) {
        var index = Math.floor(Math.random() * erlaubt.length);
        password += erlaubt[index];
    }
    document.getElementById("passwortfeld").value = password;
    if(document.getElementById("passwortfeld").value.length != laenge) generatePassword();
}

function copy() {
    var text = document.getElementById("passwortfeld");
  
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText(text.value);
}

