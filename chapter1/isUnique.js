// Implement if a string has all unique characters

/*
O: Boolean
Input: String
Constraints: Can I use additional data structure? Ascii or unicode
Edge case: null string

psuedo code

if len of str > 128 return false
loop through the string
  maintain an array of booleans to check if a char has appeared or not
*/
function isUnique(str) {
  let contains = [];

  for (char of str) {
    const ascii = char.charCodeAt();
    if(contains[ascii]) return false;
    contains[ascii] = true;
  }

  return true;

}

// Test
console.log(isUnique('abcd'))
console.log(isUnique('abca'))
console.log(isUnique('abcA'))