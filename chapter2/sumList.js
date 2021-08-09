const LinkedList = require('../util/LinkedList');
/*
Algorithm
first create a reference node

check lengths of linkedLists. If one greater than the other, assign val 0
add the values
get the last digit
get carry
continue to loop

After the loop, check if carry > 0 . If so, add to linked list (head)


*/


function sumLinkedList(l1, l2) {
  var dummy_head = new LinkedList(0);
  var l3 = dummy_head;
  var carry = 0;

  while (l1 || l2) {
    var l1_val = l1 !== null ? l1.value : 0;
    var l2_val = l2 !== null ? l2.value : 0;

    var sum = l1_val + l2_val + carry;
    var last_digit = sum % 10;
    carry = Math.floor(sum / 10);

    var newNode = new LinkedList(last_digit);
    l3.next = newNode;

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
    l3 = l3.next;
  }

  if (carry > 0) {
    var carryNode = new LinkedList(carry);
    l3.next = carryNode;
    l3 = l3.next;

  }
  return dummy_head.next;
}













var a = new LinkedList(7)
var b = new LinkedList(1)
var c = new LinkedList(6)

a.next = b
b.next = c

var d = new LinkedList(5)
var e = new LinkedList(9)
var f = new LinkedList(2)

d.next = e
e.next = f

console.log(sumLinkedList(a,d))