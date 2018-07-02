'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);

    if (!this.head) {
      return null;
    }

    if(this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }

    return null;
  }

  insertAfter(value, newValue) {
    if (!this.head) {
      return null;
    }
  }
};
