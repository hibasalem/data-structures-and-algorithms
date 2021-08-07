"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
  }

  pop() {
    try {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;
    } catch {
      return "stack is empty";
    }
  }

  peek() {
    try {
      return this.top.value;
    } catch {
      return "stack is empty";
    }
  }

  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Stack;
