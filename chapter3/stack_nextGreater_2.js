var nextGreaterElements = function(nums) {
  var len = nums.length;
  var output = new Array(len);
  output.fill(-1);

  var stack = [];

  for (let i = 0; i < len*2; i++) {

      while(stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i % len]) {
          output[stack.pop()] = nums[i % len];
      }

      if (i < len) stack.push(i);
  }

  return output;
};


console.log(nextGreaterElements([1,2,1]))