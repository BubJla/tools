var i = 0;
var zeilen = 2;

function zeile() {
  console.log(zeilen);
  var inner = "";

  for(let w = 0; w < zeilen; w++) {
    inner+= "<span>";
    for(let q = 0; q < zeilen ; q++) {
      inner += '<input type="text" class = "gleichsys" value="1" id="syst'+(w)+(q)+'"> <d>x'+(q+1)+'+</d>';
    }
    inner += '<input type="text" class = "gleichsys" value="0" id="syst'+(w)+(zeilen)+'"> <d>=0</d>';
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
    if (Array.isArray(arr[i])) {
      copiedArray[i] = copyArray(arr[i]);
    } else {
      copiedArray[i] = arr[i];
    }
  }
  return copiedArray;
}

function lgs() {
  var array = [];

  for(let b = 0; b < zeilen; b++) {
    array[b] = [];
    for(let c = 0; c < zeilen+1; c++) {
      array[b][c] = document.getElementById("syst"+b+c).value;
    }
  }

  var ergebnisArray = [];

  var original = copyArray(array);

  array = array.sort((a, b) => dif(a, b)); // Verwende die Vergleichsfunktion in der Sortierung


  for (var k = 0; k < array.length; k++) {
    console.log("arr    " + array);
    for (var i = 0; i < array.length; i++) {
      if (array[i][i] == 0) alert();
      for (var n = i + 1; n < array.length; n++) {
        for (var p = i + 1; p < array.length + 1; p++) {
          array[n][p] += array[i][p] * array[n][i] / (-array[i][i]);
        }
      }
    }


    ergebnisArray[ergebnisArray.length] = -array[array.length - 1][array.length] / array[array.length - 1][array.length - 1];
    console.log(-array[array.length - 1][array.length] / array[array.length - 1][array.length - 1]);
    /*array = copyArray(original);
    console.log("arr1    " + array);
    var arrayNew = [];
    for(let z = 0; z < array.length; z++) {
        for(let u = 0; u <= array.length; u++) {
          if(u == k) arrayNew[arrayNew.length] = array[z][array.length-1];
          else if(u == array.length-1) arrayNew[arrayNew.length] = array[z][k];
          else arrayNew[arrayNew.length] = array[z][u];
        }
        let temp = array[z][array.length - 1];
        console.log("fdfd       "+temp);
        array[z][array.length - 1] = array[k];
        array[z][k] = temp
    }
    console.log("arNew     "+arrayNew);
    array = arrayNew;
    console.log("arr2    " + array);*/
    for(let f = 0; f < ; f++) {
      
    }
  }

  console.log("erg    " + ergebnisArray);
}
zeile();

lgs();


