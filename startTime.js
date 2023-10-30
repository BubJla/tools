

document.getElementById("listeNebeneinanderZeit").innerHTML=`
    <li class="nebeneinander" id="zeit" style="width: 33.3%">
        <a href="zeit.html" onclick="posBar = 0">Uhr</a>
    </li>
    <li class="nebeneinander" id="zeitStoppuhr" style="width: 33.3%">
        <a href="zeitStoppuhr.html" onclick="posBar = 1">Stoppuhr</a>
    </li>
    <li class="nebeneinander" id="zeitTimer" style="width: 33.3%">
        <a href="zeitTimer.html" onclick="posBar = 2">Timer</a>
    </li>
    <li id="activeBackground"></li>
    `;

let aktuelleSeite2 = document.URL;
aktuelleSeite2 =  aktuelleSeite2.split("/");
aktuelleSeite2 =  aktuelleSeite2[aktuelleSeite2.length-1];
aktuelleSeite2 =  aktuelleSeite2.split(".");
aktuelleSeite2 =  aktuelleSeite2[0];
document.getElementById(aktuelleSeite2).setAttribute("class", "aktiv");
    