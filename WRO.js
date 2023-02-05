var auto_refresh = setInterval(function() { endfunction();}, 100);
var auto_refreshscore = setInterval(function() { score();}, 500);
var punkte = 0;
var robo = document.getElementById("RoboStart"); 
var spetialcontainer;
var containerBootK = document.getElementById("BootKVoll");
var containerBootG = document.getElementById("BootGVoll");
var boot;
function score()
{
    punkte =  document.getElementById("BeliebigerContainerSchiff").value*10
        + document.getElementById("BootKVoll").checked*9//true: value = 1
        + document.getElementById("kraftstoffsteinBoot").checked*11
        + document.getElementById("containerWBootG").checked*10
        + document.getElementById("ContainerFarbeBootG").value*11
        + document.getElementById("BootGVoll").checked*9
        + document.getElementById("SpetialcontainerRobo").checked*10
        + document.getElementById("Kran0").checked*0
        + document.getElementById("KranA").checked*14
        + document.getElementById("KranB").checked*20
        + document.getElementById("KranAktiv").checked*11
        + document.getElementById("BootMeer").value*12
        + document.getElementById("Molenelement").value*3
        + document.getElementById("RoboStart").checked*10
        + document.getElementById("RoboLiegeplatz").checked*17;
    document.getElementById("Gesamtpunktzahl").innerHTML = punkte;
    document.getElementById("prozentsatz").innerHTML = Math.round(1000*punkte/165)/10;
}
function endfunction()
{
    if(document.getElementById("RoboStart").checked==true) 
    {
        robo = document.getElementById("RoboLiegeplatz");
        robo.setAttribute("disabled", "");
    }
    else if(document.getElementById("RoboLiegeplatz").checked==true)
    {
        robo = document.getElementById("RoboStart");
        robo.setAttribute("disabled", "");
    }
    else robo.removeAttribute("disabled");

    if(document.getElementById("KranB").checked==true || document.getElementById("KranA").checked==true)
    {
        spetialcontainer = document.getElementById("SpetialcontainerRobo");
        spetialcontainer.setAttribute("disabled", "");
    }
    else 
    {
        spetialcontainer = document.getElementById("SpetialcontainerRobo");
        spetialcontainer.removeAttribute("disabled");       
    }
    if(document.getElementById("SpetialcontainerRobo").checked==true) 
    {
        spetialcontainer = document.getElementById("KranA");
        spetialcontainer.setAttribute("disabled", "");
        spetialcontainer = document.getElementById("KranB");
        spetialcontainer.setAttribute("disabled", "");
    }
    else 
    {
        spetialcontainer = document.getElementById("KranA");
        spetialcontainer.removeAttribute("disabled");
        spetialcontainer = document.getElementById("KranB");
        spetialcontainer.removeAttribute("disabled");      
    }
    if(document.getElementById("BeliebigerContainerSchiff").value == 2)
    {
        containerBootK = document.getElementById("BootKVoll");
        containerBootK.setAttribute("checked", "true");
        containerBootK.removeAttribute("disabled");
    }
    else
    {
        containerBootK.removeAttribute("checked");
        containerBootK.setAttribute("disabled", "");
    }

    if(document.getElementById("containerWBootG").checked == true && document.getElementById("ContainerFarbeBootG").value == 2)
    {
        containerBootG = document.getElementById("BootGVoll");
        containerBootG.setAttribute("checked", "true");
        containerBootG.removeAttribute("disabled");
    }
    else
    {
        containerBootG.setAttribute("disabled", "");
        containerBootG.removeAttribute("checked");
    }
    //alert(document.getElementById("SpetialcontainerRobo").checked);
    boot = document.getElementById("BeliebigerContainerSchiff");
    boot.setAttribute("max", "2");
}

