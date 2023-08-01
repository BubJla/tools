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
  for (var i = 0; i < arr.length; i++) {
    copiedArray[i] = [];
    for (var u = 0; u < arr[0].length; u++) {
      copiedArray[i][u] = eval(arr[i][u]);
    }
  }
  return copiedArray;
}

function lgs() {
  var array = [];
  var ErgLGSChange = [];
  var ergebnisArray = [];
  var original;

  for (let b = 0; b < zeilen; b++) {
    array[b] = [];
    for (let c = 0; c < zeilen + 1; c++) {
      array[b][c] = document.getElementById("syst" + b + c).value;
    }
  }

  var veryOriginal = copyArray(array);

  for(var t = array.length-1; t >= 0; t--) {
    array = copyArray(veryOriginal);
    array = array.sort(function(a, b) {
      return (b[t]-a[t]);
    });
    ergebnisArray = [];
    original = copyArray(array);


    for (var k = 0; k < array.length; k++) {
      array = copyArray(original);

      for (let r = 0; r < array.length; r++) {
        array[r][array.length - 1] = original[r][k];
        array[r][k] = original[r][array.length - 1];
      }

      
      for (var i = 0; i < array.length; i++) {
        if (array[i][i] == 0) console.log("fehler");
        for (var n = i + 1; n < array.length; n++) {
          for (var p = i + 1; p < array.length + 1; p++) {
            array[n][p] += array[i][p] * array[n][i] / (-array[i][i]);
            array[n][p] = eval(array[n][p]);
          }
        }
      }

      ergebnisArray[ergebnisArray.length] = -array[array.length - 1][array.length] / array[array.length - 1][array.length - 1];
    }
    ErgLGSChange[ErgLGSChange.length] = ergebnisArray;
  }


  for(i = 0; i < ergebnisArray.length; i++) {
    if(!(ergebnisArray[i] <= 0 || ergebnisArray[i] >= 0)) {
      for(let z = 0; z < ErgLGSChange.length; z++) {
        if(ErgLGSChange[z][i] <= 0 || ErgLGSChange[z][i] >= 0) {
          ergebnisArray[i] = ErgLGSChange[z][i];
          break;
        }
      }
    }
  }

  console.log(ErgLGSChange);

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
