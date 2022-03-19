"use strict";

const Node = require("../LinkedList/LL").Node;

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.name;
    }
    throw new RangeError("Cannot pop from an empty stack");
  }
  
  peek() {
    if (this.top) { return this.top.name; }
    throw new RangeError("Cannot peek an empty stack");
  }
  
  isEmpty() {
    return !this.top;
  }
}

module.exports = { stack: Stack };