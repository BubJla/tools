touch = false;
var breite = (screen.width)*0.84-52;
var cod0 = [];

function add(event) {
    const obj = document.getElementById("zeichenfeld");
    const objSvg = document.getElementById("svg");
    if(touch) {
        x = event.getX-obj.offsetLeft;
        y = event.getY-obj.offsetTop;
    }
    else {
        x = event.clientX-obj.offsetLeft;
        y = event.clientY-obj.offsetTop;
    }
    if(cod0[0] == undefined) {
        cod0[0] = x;
        cod0[1] = y;
    }
    objSvg.innerHTML += '<line x1="'+cod0[0]+'" y1="'+cod0[1]+'" x2="'+x+'" y2="'+y+'" style="stroke:#fff;stroke-width:2" />';
    cod0[0] = x;
    cod0[1] = y;
}

document.getElementById("zeichenfeld").addEventListener('mousemove', add);

