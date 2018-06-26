'use strict';

class Queue {
  constructor() {
    this.animals = [];
  }

  enqueue(item) { // add item to the end
    this.animals.push(item);
  }

  dequeue() { // Remove item from the end
    if(this.animals.length < 1) {
      alert('Nothing in queue');
    }
    this.animals.pop();
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }
}

let cat = new Animal('Cat');
let dog = new Animal('Dog');

let q = new Queue;
console.log(q);
q.enqueue(cat);
q.enqueue(dog);
q.enqueue(cat);
q.enqueue(dog);
q.enqueue(cat);
console.log(q.animals);
console.log(`The length after enqueue is ${q.animals.length}`);
q.dequeue();
console.log(q.animals);
console.log(`The length after dequeue is ${q.animals.length}`);