var auto_refresh = setInterval(function() {Trinkgeldberechnung();}, 100);

var betragGeben;
function Trinkgeldberechnung() {
    let betragGeben = Math.round(
        document.getElementById("Betrag").value*1.02 
        + document.getElementById("personen").value*0.4 +0.3);//+0.3 zur aufrundung ab 0.2

    document.getElementById("betragZuZahlen").innerHTML = betragGeben;
    document.getElementById("trinkgeld").innerHTML = Math.round(10*(betragGeben - document.getElementById("Betrag").value))/10;
}
