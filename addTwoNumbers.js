function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let dummy = new Node(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = carry; // 0 + 8 + 7 = 15

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10); // 1
    current.next = new Node(15 % 10); //  15  / 10   => 5
                                          
    current = current.next;
  } 

  if (carry > 0) {
    current.next = new Node(carry);
  }

  return dummy.next;
}

const l1 = new Node(8);
l1.next = new Node(4);
l1.next.next = new Node(8);

const l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(7);

let result = addTwoNumbers(l1, l2);







/* 

Iteración 1:
  l1 = 2, l2 = 5, carry = 0
  sum = carry + l1.val + l2.val = 0 + 2 + 5 = 7

Iteración 2:
  l1 = 4, l2 = 6, carry = 0
  sum = carry + l1.val + l2.val = 0 + 4 + 6 = 0

Iteración 3: 
  l1 = 3, l2 = 4, carry = 1
  sum = carry + l1.val + l2.val = 1 + 3 + 4 = 8


*/
