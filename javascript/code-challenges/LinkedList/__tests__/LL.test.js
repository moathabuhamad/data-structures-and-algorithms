"use strict";

const { LinkedList , zipLists } = require("../LL");

describe("Testing linked list", () => {
  it("testing empty list", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it("testing insert", () => {
    let list = new LinkedList();
    list.insert("newNode");
    expect(list.head.value).toEqual("newNode");
    expect(list.head.next).toBeNull();
  });

  it("test fining first node", () => {
    let list = new LinkedList();
    list.insert("c");
    list.insert("b");
    list.insert("a");
    expect(list.head.value).toEqual("a");
  });

  it("testing multi insert", () => {
    let list = new LinkedList();
    list.insert("a");
    expect(list.head.value).toEqual("a");
    expect(list.head.next).toBeNull();
    list.insert("b");
    expect(list.head.value).toEqual("b");
    expect(list.head.next.value).toEqual("a");
    list.insert("c");
    expect(list.head.value).toEqual("c");
    expect(list.head.next.value).toEqual("b");
  });

  it("testing inludes()", () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.includes(2)).toEqual(true);
    expect(list.includes(99)).toEqual(false);
  });

  it("testing toString()", () => {
    let list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    console.log(list);
    expect(list.toString()).toEqual(expect.any(String));
    expect(list.toString()).toMatch("{1} -> {2} -> {3} -> NULL");
  });

  it("testing append() method", () => {
    let list = new LinkedList();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    let listString = list.toString();

    expect(listString).toEqual("{0} -> {1} -> {2} -> {3} -> {4} -> NULL");
  });

  it("testing insertBefore() method", () => {
    let list = new LinkedList();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(3, 10);
    let listString = list.toString();
    let response = list.insertBefore(100, 7);

    expect(listString).toEqual("{0} -> {1} -> {2} -> {10} -> {3} -> NULL");
    expect(response).toEqual("Exception");
  });

  it("testing insertAfter() method", () => {
    let list = new LinkedList();
    list.append(0);
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(3, "B");
    let listString = list.toString();

    expect(listString).toEqual("{0} -> {1} -> {2} -> {3} -> {B} -> NULL");
  });

  it("testing kthFromEnd()", () => {
    let list = new LinkedList();
    list.append(0);
    expect(list.kthFromEnd(-1)).toEqual("exception");
    expect(list.kthFromEnd(0)).toEqual(0);
    expect(list.kthFromEnd(1)).toEqual("exception");
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthFromEnd(2)).toEqual(1);
    expect(list.kthFromEnd(0)).toEqual(3);
    expect(list.kthFromEnd(10)).toEqual("exception");
  });

  
});

describe(" ziplist  ", () => {
  let link1 = new LinkedList();
  let link2 = new LinkedList();
  let link3 = new LinkedList();
  let link4 = new LinkedList();
  link1.insert(1);
  link1.append(2);
  link1.append(5);
  link2.insert(7);
  link2.append(8);
  link2.append(9);


  test("It should return error massage if empty list is passed ", () => {
    expect(zipLists(link3, link4)).toBe(
      "Exception: must provide 2 non-empty lists"
    );
  });

  test("It should return mirged lists if input is valid ", () => {
    expect(zipLists(link1, link2).toString()).toBe(
      `{1} -> {7} -> {2} -> {8} -> {5} -> {9} -> NULL`
    );
});
});