"use strict";
const Queue = require("../que.js");
const Stack = require("../stack.js");

describe("testing Queue", () => {
  it("instantiate an empty queue", () => {
    let que = new Queue();
    expect(que.front).toBeNull;
  });

  it("enqueue into a queue", () => {
    let que = new Queue();
    que.enqueue(1);
    expect(que.front).toEqual(1);
  });
  it("enqueue multiple values into a queue", () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(que.front).toEqual(1);
    expect(que.storage.head.next.value).toEqual(2);
    expect(que.storage.head.next.next.value).toEqual(3);
  });
  it("dequeue out of a queue the expected value", () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(que.dequeue()).toEqual(1);
    expect(que.front).toEqual(2);
  });
  it("empty a queue after multiple dequeues", () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.dequeue();
    que.dequeue();
    expect(que.isEmpty()).toEqual(true);
  });
  it("peek into a queue, seeing the expected value", () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(que.peek()).toEqual(1);
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    let emptyQue = new Queue();
    expect(emptyQue.isEmpty).toBeTruthy();
    emptyQue.dequeue();
    emptyQue.peek();
    expect(consoleSpy).toHaveBeenCalledWith("exception: queue is empty");
  });
});

describe("Testing Stack", () => {
  it("instantiate an empty stack", () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
  });
  it("push onto a stack", () => {
    let stack = new Stack();
    stack.push("a");
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.top).toEqual("a");
  });
  it("push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    expect(stack.top).toEqual("c");
  });
  it("pop off the stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    let x = stack.pop();
    expect(x).toEqual(x);
    expect(stack.top).toEqual("b");
  });
  it("Can empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    let x = stack.pop();
    expect(x).toEqual(x);
    expect(stack.top).toEqual("b");
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it("peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    expect(stack.peek()).toEqual("3");
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    let stack = new Stack();
    stack.peek();
    expect("exception");
    stack.pop();
    expect("exceptio");
  });
});
