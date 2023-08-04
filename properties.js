function evalBodyMassIndex() {
    const mass = document.getElementById("mass").value.replace(",", ".");
    const height = document.getElementById("height").value.replace(",", ".");
    if(mass=="") return;
    if(height=="") return;
    const BMI = mass / (height * height);
    document.getElementById("IndexValue").value = BMI.toFixed(2);
    if(BMI < 18.5) document.getElementById("IndexValue2").value = "Untergewicht";
    else if(BMI < 24.9) document.getElementById("IndexValue2").value = "Normalgewicht";
    else if(BMI < 29.9) document.getElementById("IndexValue2").value = "Übergewicht";
    else document.getElementById("IndexValue2").value = "Fettleibigkeit";
} 


function integralToIQ() {
    if(document.getElementById("percentage").value == "") return;
    var percentage = eval(eval(document.getElementById("percentage").value.replace(",", "."))/100);
    if(percentage>0.5) percentage = 1-percentage;
    if(percentage < 1e-16) {
        var iqRes;
        switch (true) {
            case percentage < 1e-240:
                iqRes = 600;
                break;
            case percentage < 1e-153:
                iqRes = 500;
                break;
            case percentage < 1e-116:
                iqRes = 450;
                break;
            case percentage < 1e-85:
                iqRes = 400;
                break;
            case percentage < 1e-58:
                iqRes = 350;
                break;
            case percentage < 1e-47:
                iqRes = 325;
                break;
            case percentage < 1e-37:
                iqRes = 300;
                break;
            case percentage < 1e-28:
                iqRes = 275;
                break;
            case percentage < 1e-25:
                iqRes = 255;
                break;
            case percentage < 1e-20:
                iqRes = 235;
                break;
            case percentage > 1e-18:
                iqRes = 230;
                break;
            case percentage > 1e-16:
                iqRes = 225;
                break;
            default:
                iqRes = 0;
        }
        if(eval(document.getElementById("percentage").value.replace(",", ".")) < 50) document.getElementById("IQRes").value = iqRes;
        else document.getElementById("IQRes").value = 200-iqRes;    
        return;
    }
    if(percentage < 0.001) {
        for(var q = 145; q < 1000; q+=0.0001) {
            let percQ = eval((15/(Math.sqrt(2*Math.PI)*(q-100)))*Math.E**(-((q-100)*(q-100)/450)));
            if(percQ < percentage) {
                break;
            }
        }
        if(document.getElementById("percentage").value.replace(",", ".") < 50) document.getElementById("IQRes").value = q.toFixed(3);
        else document.getElementById("IQRes").value = (200-q).toFixed(3);
        return;
    }
    var term = "(1/Math.sqrt(2*Math.PI)*Math.E**(-0.5*x*x))";
    var sum = 0;
    var x = 0;
    var genauigkeit = 10000;
    while(1) {
        if(0.5-sum <= percentage) break;
        sum += eval(term)*1/genauigkeit;
        x+=1/genauigkeit;
    }
    if(eval(document.getElementById("percentage").value.replace(",", ".")) > 50) document.getElementById("IQRes").value = (-x*15+100).toFixed(3);
    else document.getElementById("IQRes").value = (x*15+100).toFixed(3);
}

function integralToPerc() {
    var iq = document.getElementById("IQRes").value.replace(",", ".");
    if(iq > 145) document.getElementById("percentage").value = eval((1500/(Math.sqrt(2*Math.PI)*(iq-100)))*Math.E**(-((iq-100)*(iq-100)/450)));
    else if(iq < 55) document.getElementById("percentage").value = "100 - "+eval((1500/(Math.sqrt(2*Math.PI)*(100-iq)))*Math.E**(-((100-iq)*(100-iq)/450)));
    else{
        if(iq < 100) iq = 200-iq;
        if(iq == 100) 
        var erg;
        var abstand = 0.001; // kleiner: genauer
        erg = 0;
        for (var x = 0; x <= iq-100; x += abstand) {
            erg += 1/Math.sqrt(2*Math.PI)/15*Math.E**(-x*x/450) * abstand;
            erg = eval(erg);
        }
        if(iq == 0) erg = 0;
        if(document.getElementById("IQRes").value.replace(",", ".") >= 100) document.getElementById("percentage").value = (50-erg*100).toFixed(3);
        else document.getElementById("percentage").value = (50+erg*100).toFixed(3);
    }

}

