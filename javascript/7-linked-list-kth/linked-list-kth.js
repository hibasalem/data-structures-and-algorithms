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

  /* kthFromEnd(k) {
    let tempNode = this.head;
    let tempArray = [];

    while (tempNode) {
      tempArray.push(tempNode.value);
      tempNode = tempNode.next;
    }

    if (k <= 0) {
      return "insert positive value ";
    } else if (k >= tempArray.length) {
      return "k is larger than the lenth of the linked list";
    } else {
      let tempK = tempArray.length - k;
      let result = tempArray[tempK - 1];
      return result;
    }
  }*/

  kthFromEnd(k) {
    let reversed = new LinkedList();
    let tempNode = this.head;
    let count = 0;

    while (tempNode) {
      reversed.insert(tempNode.value);
      tempNode = tempNode.next;
    }

    let tempNodeB = reversed.head;

    while (tempNodeB) {
      if (k <= 0) {
        return "insert positive value ";
      } else if (count === k) {
        return tempNodeB.value;
      }
      count++;
      tempNodeB = tempNodeB.next;
    }
  }
}

module.exports = LinkedList;
