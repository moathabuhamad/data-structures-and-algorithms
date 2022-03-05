"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let nodeString = "";
    while (currentNode) {
      nodeString = nodeString + `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return JSON.stringify(nodeString + "NULL");
  }
}

module.exports = { LinkedList: LinkedList, Node: Node };
