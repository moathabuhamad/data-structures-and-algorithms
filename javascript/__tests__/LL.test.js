'use strict';

const { LinkedList } = require('../code-challenges/Challenge05/LL');

describe('Testing linked list', () => {

  it('testing empty list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });



  it('testing insert', () => {
    let list = new LinkedList();
    list.insert('newNode');
    expect(list.head.value).toEqual('newNode');
    expect(list.head.next).toBeNull();
  });



  it('test fining first node', () => {
    let list = new LinkedList();
    list.insert('c'); list.insert('b'); list.insert('a');
    expect(list.head.value).toEqual('a');
  });



  it('testing multi insert', () => {
    let list = new LinkedList();
    list.insert('a');
    expect(list.head.value).toEqual('a');
    expect(list.head.next).toBeNull();
    list.insert('b');
    expect(list.head.value).toEqual('b');
    expect(list.head.next.value).toEqual('a');
    list.insert('c');
    expect(list.head.value).toEqual('c');
    expect(list.head.next.value).toEqual('b');
  });



  it('testing inludes()', () => {
    let list = new LinkedList();
    list.insert(3); list.insert(2); list.insert(1);
    expect(list.includes(2)).toEqual(true);
    expect(list.includes(99)).toEqual(false)
  });


  it('testing toString()', () => {
    let list = new LinkedList();
    list.insert(3); list.insert(2); list.insert(1);
    console.log(list);
    expect(list.toString()).toEqual(expect.any(String));
    expect(list.toString()).toMatch('"{ 1 } -> { 2 } -> { 3 } -> NULL"');
  });
});