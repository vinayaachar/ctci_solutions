/*
Implement an Algorithm to check if 2 str's are 1 or 2 edits away

I: 2 strings
O: Boolean
C: None
E: none

Psuedocode

brute force method

Compare every char of string and maintain a counter
*/

function oneAway(str1, str2) {
  var count = 0;
  var strArray = str1.split('');

  for(let i = 0; i < str2.length; i++) {
    if(!strArray.includes(str2[i])) {
      count++;
    }
  }

  return count > 1 ? false : true;
}



function oneAway1(str1, str2) {
  // check oneMissing
  var oneMissing = (first, second) => {
    if(first.length !== second.length - 1) return false;
    var mulligan = false;
    var fp = 0;
    var sp = 0;

    while(fp < first.length) {
      if(first[fp] !== second[sp]) {
        if(mulligan) return false;
        else {
          mulligan = true;
          sp++;
        }
      } else {
        fp++;
        sp++
      }
    }
    return true;
  }

  var checkOneDiff = (first, second) => {
    if (first.length !== second.length) return false;
    var mulligan = false;
    var fp = 0;
    var sp = 0;

    while(fp < first.length) {
      if (first[fp] !== second[sp]) {
        if(mulligan) return false;
        else mulligan = true;
      }
      fp++;
      sp++
    }
    return true
  }

  return oneMissing(str1, str2) || oneMissing(str2, str1) || checkOneDiff(str1, str2)
}

//tests
console.log(oneAway1('ple', 'pale'), true);
console.log(oneAway1('pales', 'pale'), true);
console.log(oneAway1('pale', 'bale'), true);
console.log(oneAway1('pale', 'bake'), false);