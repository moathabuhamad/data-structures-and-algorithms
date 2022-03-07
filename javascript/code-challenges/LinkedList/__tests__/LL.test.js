'use strict';

const { LinkedList } = require('../LL');

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
    expect(list.toString()).toMatch('{1} -> {2} -> {3} -> NULL');
  });


it('testing append() method', () => {
  let list = new LinkedList();
  list.append(0);
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  let listString = list.toString();

  expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> NULL');
});

it('testing insertBefore() method', () => {
  let list = new LinkedList();
  list.append(0);
  list.append(1);
  list.append(2);
  list.append(3);
  list.insertBefore(3, 10);
  let listString = list.toString();
  let response = list.insertBefore(100, 7);

  expect(listString).toEqual('{0} -> {1} -> {2} -> {10} -> {3} -> NULL');
  expect(response).toEqual('Exception');    
});


it('testing insertAfter() method', () => {
  let list = new LinkedList();
  list.append(0);
  list.append(1);
  list.append(2);
  list.append(3);
  list.insertAfter(3, 'B');
  let listString = list.toString();

  expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {B} -> NULL');
});

});