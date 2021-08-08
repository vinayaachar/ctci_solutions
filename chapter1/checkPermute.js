/*
Output: Boolean
Input : 2 strings
Constraints: Is it case sensitive?
Edge case: White spaces?

Psuedo code:
if len's are different false
sort them and compare : return
*/


function checkPermute(str1, str2) {
  if(str1.length !== str2.length) return false;

  //sort
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 === str2 ? true : false
}


//tests

console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);