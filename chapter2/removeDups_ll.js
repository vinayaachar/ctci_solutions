function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}



var node1 = new ListNode(1);
var node2 = new ListNode(1);
var node3 = new ListNode(2);
var node4 = new ListNode(3);
var node5 = new ListNode(3);


var node = node1;
node.next = node2
node.next.next = node3
node.next.next.next = node4
node.next.next.next.next = node5

function removeDuplicates(head) {
  const _set = new Set();
  let curr = head;
  let prev = null;

  while(curr && curr.next) {
    if(_set.has(curr.val)) {
      let ele = curr;
      prev.next = curr.next;
      curr = curr.next;
      ele.next = null;
    } else {
      _set.add(curr.val);
      prev = curr;
      curr = curr.next
    }
  }

  return head;
}


console.log(removeDuplicates(node));