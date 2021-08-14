class MinStack {
  constructor() {
    this.stack = [];
    this.minVals = [];
  }


  push(val) {
    if(this.minVals.length === 0 || val <= this.minVals[this.minVals.length - 1]) {
      this.minVals.push(val);
    }

    this.stack.push(val);
  }

  pop() {
    if(this.stack[this.stack.length - 1] === this.minVals[this.minVals.length - 1]) {
      this.minVals.pop();
    }

    this.stack.pop();
  }


  top() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    return this.minVals[this.minVals.length - 1];
  }
}

//Tests

var stack = new MinStack();
stack.push(0);
stack.push(1);
stack.push(3);
stack.pop();

console.log(stack.min());
