'use strict';
const PseudoQueue = require('../PseudoQueue');

describe('Queue Tests', () => {
  it('Can instantiate an empty Queue', () => {
    const queue = new PseudoQueue();
    expect(queue).toBeDefined();
  });

  it('Can enqueue a new value', () => {
    const queue = new PseudoQueue();
    let testQue = queue.enqueue('a');
    expect(testQue[0]).toBe('a');
  });

  it('Can enqueue many values', () => {
    const queue = Que();
    let testQue = queue.enqueue('b');
    console.log(testQue);
    expect(testQue[0]).toBe('b');
  });

  it('Can dequeue the front value', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    let newQ = queue.dequeue();
    expect(newQ).toBe('a');
  });

  it('Can dequeue the correct value', () => {
    let queue = Que();
    let testQue = queue.dequeue();
    expect(testQue).toBe('a');
  });

  it('Can throw an error when dequeueing an empty queue', () => {
    const queue = new PseudoQueue();
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue');
  });

  it('Can empty a queue after several dequeues', () => {
    const queue = Que();
    for (let i = 0; i < 4; i++) {
      queue.dequeue();
    }
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue');
  });
});

const Que = () => {
  const queue = new PseudoQueue();
  queue.enqueue('a');
  queue.enqueue('b');
  queue.enqueue('c');
  queue.enqueue('d');
  return queue;
};
