var laenge = 8;


function generatePassword() {
    var erlaubt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var zahlen = "0123456789";
    var zeichen = "!#$%&*()+}{[]?></-="
    if(document.getElementById("zahlen").checked == true) erlaubt += zahlen;
    if(document.getElementById("zeichen").checked == true) erlaubt += zeichen;
    if(laenge == 99) laenge = document.getElementById("variabelLaenge").value;

    let password = "";
    for (let i = 0; i < laenge; i++) {
        var index = Math.floor(Math.random() * erlaubt.length);
        password += erlaubt[index];
    }
    document.getElementById("passwortfeld").innerHTML = password;
    if(document.getElementById("passwortfeld").innerHTML.length != laenge) generatePassword();
}

