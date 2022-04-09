"use strict";

const { LinkedList } = require("../LinkedList/LL.js");

class Queue {
  constructor() {
    this.storage = new LinkedList();
    this.front = null;
  }

  enqueue(value) {
    this.storage.append(value);
    this.front = this.storage.head.value;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error("exception: queue is empty");
    } else {
      let item = this.front;
      this.storage.head = this.storage.head.next;
      if (this.storage.head) {
        this.front = this.storage.head.value;
      }
      return item;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.error("exception: queue is empty");
    }
    else{return this.front;}
  }

  isEmpty() {
    return this.storage.head ? false : true;
  }
}

module.exports = Queue;