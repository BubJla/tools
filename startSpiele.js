

document.getElementById("listeNebeneinanderSpiele").innerHTML=`
    <li class="nebeneinander" style="width: 25%">
    <a id="kopfrechentraining" href="kopfrechentraining.html" class = "">Kopfrechnen</a>
    </li>
    <li class="nebeneinander" style="width: 25%">
    <a id="TicTacToe" href="TicTacToe.html">TicTacToe</a>
    </li>
    <li class="nebeneinander" style="width: 25%">
    <a id="spiele2" href="spiele.html">Reaktion</a>
    </li>
    <li class="nebeneinander" style="width: 25%">
    <a id="spieleClickgeschw" href="spieleClickgeschw.html">Clicks</a>
    </li>`;

let aktuelleSeite2 = document.URL;
aktuelleSeite2 =  aktuelleSeite2.split("/");
aktuelleSeite2 =  aktuelleSeite2[aktuelleSeite2.length-1];
aktuelleSeite2 =  aktuelleSeite2.split(".");
aktuelleSeite2 =  aktuelleSeite2[0];
aktuelleSeite2 =  aktuelleSeite2.replace("spiele", "spiele2");
aktuelleSeite2 =  aktuelleSeite2.replace("spiele2Clickgeschw", "spieleClickgeschw");
document.getElementById(aktuelleSeite2).setAttribute("class", "aktiv");
