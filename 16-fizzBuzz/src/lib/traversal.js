'use strict';

import binaryTree from "./tree";

const fizzBuzz = (node) => {
  if (node % 3 === 0 && node % 5 === 0) {
    node = 'fizzbuzz';
  }

  if (node % 3 === 0) {
    node = 'fizz';
  }

  if (node % 5 === 0) {
    node = 'buzz';
  }

  else {
    node;
  }
}

const preOrderTraversal = (rootNode, fizzBuzz) => {
  if (!rootNode) return undefined;
  fizzBuzz(rootNode.value);
  preOrderTraversal(rootNode.left, fizzBuzz);
  preOrderTraversal(rootNode.right, fizzBuzz);
  return undefined;
};

