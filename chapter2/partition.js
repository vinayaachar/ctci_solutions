const LinkedList = require('../util/LinkedList');

/*
Algorithm

2 pointer before and after
before accumulates all nodes less than x
after accumulates all nodes greater than x
*/

function partition(head, x) {
  var beforeHead = new LinkedList(0);
  var before = beforeHead;
  var afterHead = new LinkedList(0);
  var after = afterHead;

  while(head) {
    if(head.value < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }

    head = head.next;
  }

  after.next = null;
  before.next = afterHead.next;

  return beforeHead.next;
}













//Tests
var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;


console.log(partition(a, 5));