"use strict";
const Queue = require("../que.js");
const stack = require("../stack.js").stack;

describe("testing Queue", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });
  afterEach[
    () => {
      consoleSpy.mockRestore();
    }
  ];

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
    expect(consoleSpy).toHaveBeenCalledWith("exception: queue is empty");
    emptyQue.peek();
    expect(consoleSpy).toHaveBeenCalledWith("exception: queue is empty");
  });
});

describe("Testing Stack", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });
  afterEach[
    () => {
      consoleSpy.mockRestore();
    }
  ];

  it("instantiate an empty stack", () => {
    let st = new stack();
    expect(st.top).toEqual(null);
  });
  it("push onto a stack", () => {
    let st = new stack();
    st.push("a");
    expect(st.isEmpty()).toEqual(false);
    expect(st.top).toEqual(st.top);
  });
  it("push multiple values onto a stack", () => {
    let st = new stack();
    st.push("a");
    st.push("b");
    st.push("c");
    expect(st.top).toEqual(st.top);
  });
  it("pop off the stack", () => {
    let st = new stack();
    st.push("a");
    st.push("b");
    st.push("c");
    let x = st.pop();
    expect(x).toEqual(x);
    expect(st.top).toEqual(st.top);
  });
  it("Can empty a stack after multiple pops", () => {
    let st = new stack();
    st.push("a");
    st.push("b");
    st.push("c");
    let x = st.pop();
    expect(x).toEqual(x);
    expect(st.top.value).toEqual("b");
    st.pop();
    st.pop();
    expect(st.isEmpty()).toBeTruthy();
  });
  it("peek the next item on the stack", () => {
    let st = new stack();
    st.push("1");
    st.push("2");
    st.push("3");
    expect(st.peek()).toEqual("3");
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    let st = new stack();
    st.peek();
    expect(consoleSpy).toHaveBeenCalledWith("exception: stack is empty");
    st.pop();
    expect(consoleSpy).toHaveBeenCalledWith("exception: stack is empty");
  });
});
