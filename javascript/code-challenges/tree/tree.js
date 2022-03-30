'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let treeResults = [];
    let walk = (node) => {
      treeResults.push(node.value);
      if (node.left) walk(node.left);
      if (node.right) walk(node.right);
    };
    walk(this.root);
    return treeResults;
  }
  postOrder() {
    let treeResults = [];
    let walk = (node) => {

      if (node.left) walk(node.left);
      if (node.right) walk(node.right);
      treeResults.push(node.value);
    };
    walk(this.root);
    return treeResults;
  }
  inOrder() {
    let treeResults = [];
    let walk = (node) => {

      if (node.left) walk(node.left);
      treeResults.push(node.value);
      if (node.right) walk(node.right);
    };
    walk(this.root);
    return treeResults;
  }

  findMaximumValue() {
    if (!this.root) {
      throw Error('Cannot find value in an empty tree');
    }
    let maxValue = this.root.value;

    function _maxValue(root) {
      if (!root) {
        return;
      }
      if (root.value > maxValue) {
        maxValue = root.value;
      }
      if (root.left) {
        _maxValue(root.left);
      }
      if (root.right) {
        _maxValue(root.right);
      }
    }
    _maxValue(this.root);
    return maxValue;
  }

}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    let treeValue = new Node(value);
    if (this.root === null) {
      this.root = treeValue;
      return this.root;
    }
    let walk = (node) => {
      if (node.value > value) {
        if (node.left) {
          walk(node.left);
        } else {
          node.left = treeValue;
        }
      } else if (node.value < value) {
        if (node.right) {
          walk(node.right);
        } else {
          node.right = treeValue;
        }
      }
    };
    walk(this.root);
    return this.root;
  }
  contain(val) {
    let treeResults = [];
    let walk = (node) => {
      if (node.value === val) return treeResults.push(val);
      if (node.value > val) {
        if (node.left) {
          walk(node.left);
        }
      } else if (node.value < val) {
        if (node.right) {
          walk(node.right);
        }
      }
    };
    walk(this.root);

    if (treeResults[0]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree,
};
