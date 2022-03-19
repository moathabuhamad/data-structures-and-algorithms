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
      console.error("Can not pop");
    }

    let item = this.front;
    this.storage.head = this.storage.head.next;
    this.front = this.storage.head.value;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.error("you can not peek and Empty Queue");
    }
    return this.front;
  }

  isEmpty() {
    return this.storage.head ? false : true;
  }
}

let qq = new Queue;


console.log(qq.peek());



module.exports = Queue;
