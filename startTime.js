

document.getElementById("listeNebeneinanderZeit").innerHTML=`
    <li class="nebeneinander">
        <a href="zeit.html"onclick="posBar = 0">Uhr</a>
    </li>
    <li class="nebeneinander">
        <a href="zeitStoppuhr.html"onclick="posBar = 1">Stoppuhr</a>
    </li>
    <li class="nebeneinander">
        <a href="zeitTimer.html"onclick="posBar = 2">Timer</a>
    </li>
    <li id="activeBackground"></li>
    `;

