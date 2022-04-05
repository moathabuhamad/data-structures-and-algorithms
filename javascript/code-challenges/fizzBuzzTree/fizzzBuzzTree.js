"use strict";

const fizzBuzzTree = (tree) => {
  if (typeof tree !== "object") {
    return null;
  }
  let current;
  if (tree.root) {
    current = tree.root;
  } else if (tree.value) {
    // If it's a subtree being evaluated recursively,
    // it won't have a `root` property
    current = tree;
  } else {
    // Return the argument if it doesn't have a root or value.
    // Maybe it's a tree with an empty root?
    return tree;
  }

  if (current.value % 3 === 0 && current.value % 5 === 0) {
    current.value = "FizzBuzz";
  } else if (current.value % 3 === 0) {
    current.value = "Fizz";
  } else if (current.value % 5 === 0) {
    current.value = "Buzz";
  }

  if (current.left) {
    fizzBuzzTree(current.left);
  }
  if (current.right) {
    fizzBuzzTree(current.right);
  }
  return tree;
};

module.exports = fizzBuzzTree;
