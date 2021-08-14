const LinkedList = require('../util/LinkedList');

/*
Algorithm

1. Have 2 pointers traverse the 2 linked lists
2. When 1st reaches end, point it to longer head linked list
3. When 2nd reaches end, point it to smaller head linked list

Break loop when 2 points meet eventually

Note: If they don't intersect, at some point they both become null and become equal and break out of the loop
*/

function intersection(headA, headB) {
  if(!headA || !headB) return null;

  var aPointer = headA;
  var bPointer = headB;

  while (aPointer.value !== bPointer.value) {
    if(aPointer === null) {
      aPointer = headB;
    } else {
      aPointer = aPointer.next;
    }
    if(bPointer === null) {
      bPointer = headA;
    } else {
      bPointer = bPointer.next;
    }
  }

  return aPointer;
}


















//Tests
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;


console.log(intersection(a, a1));