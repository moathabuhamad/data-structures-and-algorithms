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
      return temp.value;
    }
    else {
      console.error("exception: stack is empty");
    }
  }

  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      console.error("exception: stack is empty");
    }
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = { stack: Stack };
