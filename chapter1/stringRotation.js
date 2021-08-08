/*
O : boolean
I: 2 strings, 1 original, 2nd potentially rotated
C: call includes only once
E : ?


Algorithm

Relies on the fact that str2+str2 will include str1 , if str2 a rotated string of str1
*/

var stringRotation = function(str1, str2) {

  if (str1.length !== str2.length) return false;

  return (str2 + str2).includes(str1);

}


// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);