const LinkedList = require('../util/LinkedList');

/*
Algorithm

Have 2 points and reverse the linked list
Prev will start will null , curr will have the curr
*/

function isPalindrome(node) {
  var l = node;
  var head = null;

  while(l) {
    // grab the current node
    var n = new LinkedList(l.value);
    // make curr node next prev node
    n.next = head;
    // make ur reverse node, into curr and next pointing prev
    head = n ;
    l = l.next;
  }

  return isEqual(node, head);
}


function isEqual(l1, l2) {
  while (l1 && l2) {
    if (l1.value !== l2.value) return false;

    l1 = l1.next;
    l2 = l2.next;
  }

  return true;
}











//tests
//Tests
var a = new LinkedList(0);
var b = new LinkedList(1);
var c = new LinkedList(2);
var d = new LinkedList(1);
var e = new LinkedList(0);


a.next = b;
b.next = c;
c.next = d;
d.next = e;


console.log(isPalindrome(a));