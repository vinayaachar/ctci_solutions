/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  //storing stack in an obj
  var stackObj = {};
  var count = 0;
  var minArray = [];

// add an item to the top of the stack
  this.push = function(value) {
    count++;
    stackObj[count] = value;
    if (minArray.length === 0) {
      minArray.push(value);
    } else {
      if (value < minArray[0]) {
          minArray.unshift(value);
      } else {
          minArray.unshift(minArray[0]);
      }
    }
  };

// remove an item from the top of the stack
  this.pop = function() {
    var temp = stackObj[count];
    delete stackObj[count];
    count--;
    minArray.shift();
    return temp;
  };

// return the number of items in the stack
  this.size = function() {
    return Object.keys(stackObj).length;
  };

// return the minimum value in the stack
  this.min = function() {
    return minArray[0];
  };
  return this;
};

var example = new Stack();



example.push(4);
example.push(3);
example.push(2);
example.push(1);
example.push(-1);
example.pop();
example.pop();


console.log(example.size())

console.log(example.min());