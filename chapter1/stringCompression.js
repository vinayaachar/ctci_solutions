/*
Algorithm

Keep count counter
Check if currStr is equal to next, if so, increment counter
If not, add to result Str, currStr + counter. Make counter = 0(restart counter)
*/

const stringCompression = function(str) {
  var compressedString = '';
  var consecutiveCount = 0;

  for (let i = 0; i < str.length; i++) {
    consecutiveCount++;

    if(str[i] !== str[i + 1]) {
      compressedString += str[i] + String(consecutiveCount);
      consecutiveCount = 0;
    }
  }

  return compressedString.length < str.length ? compressedString : str
}


//Tests
console.log(stringCompression('aabcccccaaa'), 'a2b1c5a3');