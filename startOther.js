

document.getElementById("listeNebeneinanderSonstiges").innerHTML=`
    <li class="nebeneinander" id="eigenschaften" style="width: 33.3%">
        <a href="eigenschaften.html" onclick="posBar = 0">Eigenschaften</a>
    </li>
    <li class="nebeneinander" id="sicherheit" style="width: 33.3%">
        <a href="sicherheit.html" onclick="posBar = 1">Passwort</a>
    </li>
    <li class="nebeneinander" id="zeichnen" style="width: 33.3%">
        <a href="zeichnen.html" onclick="posBar = 2">DEV</a>
    </li>
    <li id="activeBackground"></li>
`;

let aktuelleSeite2 = document.URL;
aktuelleSeite2 =  aktuelleSeite2.split("/");
aktuelleSeite2 =  aktuelleSeite2[aktuelleSeite2.length-1];
aktuelleSeite2 =  aktuelleSeite2.split(".");
aktuelleSeite2 =  aktuelleSeite2[0];
document.getElementById(aktuelleSeite2).setAttribute("class", "aktiv");
