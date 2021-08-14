var isValid = function(s) {
  var stack = [];

  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
          stack.push(s[i]);
      } else {
          var popVal = stack.pop();
          if (s[i] === ')' && popVal !== '(') return false;
          else if(s[i] === ']' && popVal !== '[') return false;
          else if(s[i] === '}' && popVal !== '{') return false;
      }
  }

  if(stack.length === 0) return true;
  else return false;
};

console.log(isValid('()'))


var obj = {1:2, 3:4}


for (var i in obj) {
  console.log(i)
}