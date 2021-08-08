// check if a string is a palindrome permutation
/*
Algorithm
For a string to be a palindrome permuatation
  - It should either have all characters repeating evenly OR
  - All chars repeating evenly except 1 (which will be the middle character)

O: boolean
I: string
C: Ignore empty and case
E: ?

Pusedo Code
1: Create an Object for each char in string and count the occurence
2: loop through keys on above Obj
  Check the occurence and return
*/



function palinPerm(str) {

  var occurence = {};
  var mulligan = false;
  var isPerm = true;
  var currChar;

  str.split('').forEach(char => {
    if(char !== ' ') {
      currChar = char.toLowerCase();
      if(!occurence[currChar]) {
        occurence[currChar] = 1;
      } else {
        occurence[currChar]++;
      }
    }
  });

  Object.keys(occurence).forEach(item => {
    if(occurence[item] % 2 > 0) {
      //odd should occur only once
      if(mulligan) {
        //has appeared more than once
        isPerm = false
      } else {
        mulligan = true;
      }
    }
  });

  return isPerm;
}

//test
// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');