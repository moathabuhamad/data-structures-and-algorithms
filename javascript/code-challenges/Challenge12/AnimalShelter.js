const { Node } = require("../LinkedList/LL.js");

class AnimalShelter {
  constructor() {
    this.back = null;
    this.front = null;
  }

  /**
   * enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
   * @function
   * @name enqueue
   * @params animal {string} Must be 'dog' or 'cat'
   **/
  enqueue(animal) {
    if (animal !== "dog" && animal !== "cat") {
      console.log("animal can be only a dog or a cat.");
      return null;
    }
    const node = new Node(animal);
    if (this.back) {
      this.back.next = node;
    }
    this.back = node;
    if (!this.front) {
      this.front = node;
    }
  }
  /**
   * dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.
   * @function
   * @name dequeue
   * @params pref {string} The preferred animal, either 'dog' or 'cat'
   **/
  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat") {
      return null;
    }

    let current = this.front;

    // No nodes
    if (!current) {
      console.log('Empty shelter');
      return ;
    }
    // One node
    if (!current.next) {
      if (current.value === pref) {
        this.front = null;
        this.back = null;
        return current.value;
      } else {
        return null;
      }
    }

    // Front === pref
    if (current.value === pref) {
      this.front = current.next;
      return current.value;
    }

    // Iteration
    let target = {};
    // Mark the front initial, move it
    this.enqueue(current.value);
    this.back.initial = true;
    this.front = current.next;
    current = this.front;

    while (current.next) {
      this.enqueue(current.value);
      this.front = current.next;
      current = this.front;
      if (current.value === pref) {
        this.front = current.next;
        target = current;
        current = this.front;
        break;
      }
    }
    // Cycle through to restore initial order
    while (!current.initial) {
      this.enqueue(current.value);
      current = this.front.next;
      this.front = current;
    }

    delete this.front.initial;
    return target.value ;
  }
}

module.exports = AnimalShelter;
