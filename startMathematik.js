

document.getElementById("listeNebeneinanderMathe").innerHTML=`
    <li class="nebeneinander" style="width: 25%">
    <a id="gleichung2" href="gleichung.html" class = "">Gleichung</a>
    </li>
    <li class="nebeneinander" style="width: 25%">
    <a id="rechner" href="rechner.html">Taschenrechner</a>
    </li>
    <li class="nebeneinander" style="width: 25%">
    <a id="rechnerBinaer" href="rechnerBinaer.html">Umrechner</a>
    </li>
    <li class="nebeneinander" style="width: 25%">
    <a id="integral" href="integral.html">Analysis</a>
    </li>`;

let aktuelleSeite2 = document.URL;
aktuelleSeite2 =  aktuelleSeite2.split("/");
aktuelleSeite2 =  aktuelleSeite2[aktuelleSeite2.length-1];
aktuelleSeite2 =  aktuelleSeite2.split(".");
aktuelleSeite2 =  aktuelleSeite2[0];
aktuelleSeite2 =  aktuelleSeite2.replace("gleichung", "gleichung2");
document.getElementById(aktuelleSeite2).setAttribute("class", "aktiv");
