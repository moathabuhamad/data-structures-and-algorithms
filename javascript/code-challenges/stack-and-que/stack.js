"use strict";

const { LinkedList } = require("../LinkedList/LL.js");

class Stack {
  constructor() {
    this.storage = new LinkedList();
    this.top = null;
  }

  peek() {
    if (this.isEmpty()) {
      console.error("Cannot peek an empty stack");
    }
    return this.top;
  }

  push(value) {
    this.storage.insert(value);
    this.top = value;
  }

  pop() {
    if (this.isEmpty()) {
      console.error("Can not pop");
    }
    let item = this.top;
    this.storage.head = this.storage.head.next;
    this.top = this.storage.head.value;
    return item;
  }

  isEmpty() {
    return this.storage.head ? false : true;
  }
}
module.exports = Stack;
