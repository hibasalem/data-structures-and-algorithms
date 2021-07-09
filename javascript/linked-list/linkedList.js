"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    // // try {
    // const node = new Node(value);
    // if (this.head) {
    //   node.next = this.head;
    // }
    // this.head = node;
    // // } catch {
    // //   console.log("add a value arrgument");
    // // }

    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let result;
    let tempNode = this.head;
    while (tempNode.next) {
      if (value == tempNode.value) {
        result = true;
        return result;
      } else {
        tempNode = tempNode.next;
      }
    }
    result = false;
    return result;
  }

  toString() {
    let string = "";
    let tempNode = this.head;
    while (tempNode) {
      string += `{ ${tempNode.value} } -> `;
      tempNode = tempNode.next;
    }
    string += `NULL`;
    return string;
  }
}

module.exports = LinkedList;
