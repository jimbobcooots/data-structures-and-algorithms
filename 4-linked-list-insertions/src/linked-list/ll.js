'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return this;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);

    if (!this.head) {
      return null;
    }

    if (this.head.value === value) {
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

    const node = new Node(newValue);

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next.next = node;
        return this;
      }

      current = current.next;
    }

    return null;
  }
};
