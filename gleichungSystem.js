var i = 0;
var zeilen = 2;

function zeile() {
  var inner = "";

  for (let w = 0; w < zeilen; w++) {
    inner += "<span>";
    for (let q = 0; q < zeilen; q++) {
      inner += '<input type="text" class="gleichsys" value="1" id="syst' + w + q + '"> <d>x' + (q + 1) + '+</d>';
    }
    inner += '<input type="text" class="gleichsys" value="0" id="syst' + w + zeilen + '"> <d>=0</d>';
    inner += "</span><br>";
  }
  document.getElementById("lgss").innerHTML = inner;
}

function dif(a, b) {
  return b[i] - a[i];
}

function copyArray(arr) {
  var copiedArray = [];
  console.log("copy: "+arr);
  for (var i = 0; i < arr.length; i++) {
    copiedArray[i] = [];
    for (var u = 0; u < arr[0].length; u++) {
      console.log("copyArray: "+arr[i][u]);
      copiedArray[i][u] = eval(arr[i][u]);
      console.log("copyArray2: "+copiedArray[i][u]);
    }
  }
  console.log(copiedArray);
  return copiedArray;
}

function lgs() {
  var array = [];

  for (let b = 0; b < zeilen; b++) {
    array[b] = [];
    for (let c = 0; c < zeilen + 1; c++) {
      array[b][c] = document.getElementById("syst" + b + c).value;
    }
  }
  
  array = array.sort(function(a, b) {
    return (b[0]-a[0]);
  });


  var ergebnisArray = [];
  var original = copyArray(array);
  console.log(array);

  for (var k = 0; k < array.length; k++) {
    console.log(original);
    array = copyArray(original);
    console.log(array);

    for (let r = 0; r < array.length; r++) {
      array[r][array.length - 1] = original[r][k];
      array[r][k] = original[r][array.length - 1];
    }

    console.log("fddfdgv:   "+array);
    
    for (var i = 0; i < array.length; i++) {
      if (array[i][i] == 0) console.log("fehler");
      for (var n = i + 1; n < array.length; n++) {
        for (var p = i + 1; p < array.length + 1; p++) {
          console.log(array);
          console.log("np: "+array[n][p]+"  ip: "+array[i][p]+"  ni: "+array[n][i]+"  ii: "+array[i][i]);
          array[n][p] += array[i][p] * array[n][i] / (-array[i][i]);
          array[n][p] = eval(array[n][p]);
        }
      }
    }

    ergebnisArray[ergebnisArray.length] = -array[array.length - 1][array.length] / array[array.length - 1][array.length - 1];
  }
  var innerErg = "";
  for (let l = 1; l <= array.length; l++) {
    innerErg += `
    <br>
    <d>x` + l + `= ` + ergebnisArray[l - 1] + `</d>
    `;
  }
  var counterNaN = 0;
  for(i = 0; i< array.length; i++){
    if(innerErg.split("NaN").length > 1) counterNaN++;
    innerErg = innerErg.replace("NaN", "Fehler");
  }
  document.getElementById("ergebnisLGS").innerHTML = innerErg;
}
zeile();
