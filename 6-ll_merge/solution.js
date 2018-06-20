'use strict';

let mergeLists = (list1, list2) => {
  let current = list1.head;
  let temp = current.next;
  
  while(list2.head != null) {
    current.next = list2.head;
    list2.head = list2.head.next
    current.next.next = temp;
  }
  return list1;
}
