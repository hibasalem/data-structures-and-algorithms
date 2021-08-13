"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }
}

module.exports = LinkedList;
