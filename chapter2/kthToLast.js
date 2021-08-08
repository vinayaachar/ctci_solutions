function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}



var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);


var node = node1;
node.next = node2
node.next.next = node3
node.next.next.next = node4
node.next.next.next.next = node5


function findKthTolast(head, k) {
  if(head === null) return 0;

  var index = findKthTolast(head.next, k) + 1;

  if(k === index) {
    console.log(k + 'th last node is ' + head.val);
  }
  return index;
}

function iterativeFind(head, k) {
  var slow = head;
  var fast = head;

  for (let i = 0; i < k; i++) {
    if(fast === null) return null;
    fast = fast.next
  }

  console.log('fast', fast)

  while(fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.val;
}


console.log(iterativeFind(node, 3));