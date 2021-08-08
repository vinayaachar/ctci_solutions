/*
O: string with spaces replaced with %20
Input: String and len
C: none
Edge case: ?

Psuedo Code
trim the string to remove spaces in the beginning/end and covert it to an array
loop over the array
  replace all empty space in array[index] with %20
*/

function replaceUrlSpaces(str) {
  const covertedArray = str.trim().split('');

  for(let i in covertedArray) {
    if(covertedArray[i] === ' ') covertedArray[i] = '%20';
  }

  return covertedArray.join('');
}

console.log(replaceUrlSpaces("Sai Charan P"));