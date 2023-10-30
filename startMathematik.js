

document.getElementById("listeNebeneinanderMathe").innerHTML=`
    <li class="nebeneinander" style="width: 20%" id="gleichung2">
    <a href="gleichung.html" onclick="posBar = 0">Gleichung</a>
    </li>
    <li class="nebeneinander" style="width: 20%" id="rechner">
    <a href="rechner.html" onclick="posBar = 1">Taschenrechner</a>
    </li>
    <li class="nebeneinander" style="width: 20%" id="rechnerBinaer">
    <a href="rechnerBinaer.html" onclick="posBar = 2">Umrechner</a>
    </li>
    <li class="nebeneinander" style="width: 20%" id="integral">
    <a href="integral.html" onclick="posBar = 3">Analysis</a>
    </li>
    <li class="nebeneinander" style="width: 20%;" id="gleichungSystem">
    <a href="gleichungSystem.html" onclick="posBar = 4">LGS</a>
    </li>
    <li id="activeBackground"></li>
    `;

let aktuelleSeite2 = document.URL;
aktuelleSeite2 =  aktuelleSeite2.split("/");
aktuelleSeite2 =  aktuelleSeite2[aktuelleSeite2.length-1];
aktuelleSeite2 =  aktuelleSeite2.split(".");
aktuelleSeite2 =  aktuelleSeite2[0];
aktuelleSeite2 =  aktuelleSeite2.replace("gleichungSystem", "LGS");
aktuelleSeite2 =  aktuelleSeite2.replace("gleichung", "gleichung2");
aktuelleSeite2 =  aktuelleSeite2.replace("LGS", "gleichungSystem");
document.getElementById(aktuelleSeite2).setAttribute("class", "aktiv");
