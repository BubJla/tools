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


function integral() {

    var percentage = Math.abs(eval(document.getElementById("percentage").value.replace(",", "."))/100-1);
    if(percentage>0.5) percentage = 1-percentage;
    var term = "(1/Math.sqrt(2*Math.PI)*Math.E**(-0.5*x*x))";
    var sum = 0;
    var x = 0;
    var genauigkeit = 1000;
    if(percentage < 0.0001) genauigkeit = 100000;
    if(percentage < 0.000001) genauigkeit = 1000000;
    if(percentage < 0.00000001) genauigkeit = 10000000;
    if(percentage < 0.00000000001) genauigkeit = 100000000;
    while(1) {
        if(0.5-sum <= percentage) break;
        sum += eval(term)*1/genauigkeit;
        x+=1/genauigkeit;
    }
    if(document.getElementById("percentage").value.replace(",", ".") > 50) document.getElementById("IQRes").value = (-x*15+100).toFixed(2);
    else document.getElementById("IQRes").value = (x*15+100).toFixed(2);
}
