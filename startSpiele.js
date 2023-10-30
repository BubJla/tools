

document.getElementById("listeNebeneinanderSpiele").innerHTML=`
    <li class="nebeneinander" style="width: 25%" id="kopfrechentraining">
        <a href="kopfrechentraining.html"  onclick="posBar = 0">Kopfrechnen</a>
    </li>
    <li class="nebeneinander" style="width: 25%" id="TicTacToe">
        <a href="TicTacToe.html" onclick="posBar = 1">TicTacToe</a>
    </li>
    <li class="nebeneinander" style="width: 25%" id="spiele2">
        <a href="spiele.html" onclick="posBar = 2">Reaktion</a>
    </li>
    <li class="nebeneinander" style="width: 25%" id="spieleClickgeschw">
        <a href="spieleClickgeschw.html" onclick="posBar = 3">Clicks</a>
    </li>
    <li id="activeBackground"></li>
    `;

let aktuelleSeite2 = document.URL;
aktuelleSeite2 =  aktuelleSeite2.split("/");
aktuelleSeite2 =  aktuelleSeite2[aktuelleSeite2.length-1];
aktuelleSeite2 =  aktuelleSeite2.split(".");
aktuelleSeite2 =  aktuelleSeite2[0];
aktuelleSeite2 =  aktuelleSeite2.replace("spiele", "spiele2");
aktuelleSeite2 =  aktuelleSeite2.replace("spiele2Clickgeschw", "spieleClickgeschw");
document.getElementById(aktuelleSeite2).setAttribute("class", "aktiv");
