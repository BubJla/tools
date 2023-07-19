function mouseMove(event) {
    var x = event.clientX-500;
    var y = event.clientY-300;
    var rotation = Math.atan(x/y)*180;
    console.log("x   "+x);
    console.log("y   "+y);
    console.log("r   "+rotation);
    document.querySelector(":root").style.setProperty("--rotation01", rotation+"deg");
}

document.addEventListener('mousemove', mouseMove);
