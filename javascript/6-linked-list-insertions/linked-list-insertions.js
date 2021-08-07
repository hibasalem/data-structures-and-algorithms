"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
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

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  insertBefore(value, newValue) {
    let tempNode = this.head;
    const node = new Node(newValue);
    if (tempNode.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (tempNode.next) {
        if (tempNode.next.value === value) {
          node.next = tempNode.next;
          tempNode.next = node;
          break;
        } else {
          tempNode = tempNode.next;
        }
      }
    }
  }

  insertAfter(value, newValue) {
    let tempNode = this.head;
    const node = new Node(newValue);
    while (tempNode) {
      if (tempNode.value === value) {
        node.next = tempNode.next;
        tempNode.next = node;
        break;
      }
      tempNode = tempNode.next;
    }
  }
}

module.exports = LinkedList;
