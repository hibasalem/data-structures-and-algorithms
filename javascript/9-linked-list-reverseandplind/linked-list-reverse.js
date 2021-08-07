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
      string += `[${tempNode.value}] -> `;
      tempNode = tempNode.next;
    }
    string += `X`;
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

  kthFromEnd(k) {
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
  }

  zipLists(list1, list2) {
    let result = new LinkedList();

    let tempNode1 = list1.head;
    let tempNode2 = list2.head;

    while (tempNode1 || tempNode2) {
      if (tempNode1) {
        result.append(tempNode1.value);
        tempNode1 = tempNode1.next;
      }
      if (tempNode2) {
        result.append(tempNode2.value);
        tempNode2 = tempNode2.next;
      }
    }

    return `head -> ${result.toString()}`;
  }

  reverse(list) {
    let result = new LinkedList();
    let tempNode = list.head;

    while (tempNode) {
      result.insert(tempNode.value);
      tempNode = tempNode.next;
    }

    return `head -> ${result.toString()}`;
  }

  palindrome(list) {
    let result = new LinkedList();
    let tempNode = list.head;

    while (tempNode) {
      result.insert(tempNode.value);
      tempNode = tempNode.next;
    }

    let tempNodeB = result.head;
    let tempNodeA = list.head;

    while (tempNodeA || tempNodeA) {
      if (tempNodeA.value !== tempNodeB.value) {
        return false;
      } else {
        tempNodeA = tempNodeA.next;
        tempNodeB = tempNodeB.next;
      }
    }
    return true;
  }

  findMiddle() {
    let tempNode = this.head;
    let fastTempNode = this.head;

    while (fastTempNode.next) {
      tempNode = tempNode.next;
      if (fastTempNode.next.next) {
        fastTempNode = fastTempNode.next.next;
      } else {
        fastTempNode = fastTempNode.next;
      }
    }
    return tempNode.value;
  }

  // reverse() {
  //   let prev = null;
  //   let current = this.head;
  //   let next = null;

  //   while (current) {
  //     next = currentNode.next;
  //     currentNode.next = prev;
  //     prev = current;
  //     current = next;
  //   }

  //   this.head = prev;
  // }
}

module.exports = LinkedList;
