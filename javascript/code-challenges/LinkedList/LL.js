"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let nodeString = "";
    while (currentNode) {
      nodeString = nodeString + `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return nodeString + "NULL";
  }

  append(value) {
    let appendedNode = new Node(value);

    if (!this.head) {
      this.head = appendedNode;
      return this.head;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = appendedNode;
  }

  insertBefore(value, newVal) {
    if (value === this.head.value) {
      this.insert(newVal);
      return this.head;
    }

    let newValNode = new Node(newVal);
    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        newValNode.next = current.next;
        current.next = newValNode;
        return this.head;
      }
      current = current.next;
    }
    return "Exception";
  }

  insertAfter(value, newVal) {
    let newValNode = new Node(newVal);
    let current = this.head;

    while (current) {
      if (current.value === value) {
        newValNode.next = current.next;
        current.next = newValNode;
        return this.head;
      }
      current = current.next;
    }
    return "Exception";
  }

  kthFromEnd(k) {
    if (k < 0) {
      return "exception";
    }

    let current = this.head;
    let laggingPointer = this.head;
    let lead = 0;
    while (current.next) {
      current = current.next;
      if (lead >= k) {
        laggingPointer = laggingPointer.next;
      }
      lead += 1;
    }
    if (k >= lead + 1) {
      return "exception";
    }
    return laggingPointer.value;
  }
}

function zipLists(list1, list2) {
  if (!list1.head || !list2.head) {
    return "Exception: must provide 2 non-empty lists";
  }
  let current1 = list1.head;
  let current2 = list2.head;
  let outputList = new LinkedList();
  //   both lists are one node long
  if (!current1.next && !current2.next) {
    outputList.insert(current1.value);
    outputList.append(current2.value);
    return outputList;
  } else {
    //  console.log("the else isrunnnnnnnning ")
    outputList.insert(current1.value);
    while (current1 !== null || current2 !== null) {
      // console.log("WHILE LOOP IS RUNNING ")
      if (current2 == null) {
        console.log("list2 reached ", current2);
      } else {
        outputList.append(current2.value);
      }
      current2 = current2.next;
      // console.log("did it break here")
      current1 = current1.next;
      // console.log("or here")
      if (current1 == null) {
        console.log("list1 reached");
      } else {
        outputList.append(current1.value);
      }
    }
    return outputList;
  }
}

module.exports = { LinkedList: LinkedList, Node: Node, zipLists: zipLists };
