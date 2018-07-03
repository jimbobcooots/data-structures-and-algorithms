'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const nodes = [];
for (let i = 1; i <= 9; i++) {
  nodes.push(new Node(i));
}

const [one, two, three, four, five, six, seven, eight, nine] = nodes;

one.left = two;
one.right = three;

two.left = six;

three.left = four;
three.right = five;

six.right = seven;

seven.left = eight;
seven.right = nine;

const binaryTree = new BinaryTree(one);

export default binaryTree;
