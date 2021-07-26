"use strict";

const Node = require("./node");
const BinaryTree = require("./binaryTree");

class BinaryTreeSearch extends BinaryTree {
  constructor(root) {
    super(root);
  }

  contains(value) {
    try {
      let result = this.preOrder();
      for (let i = 0; i < result.length; i++) {
        if (result[i] == value) {
          return true;
        }
      }
      return false;
    } catch {
      return "some thing went wrong";
    }
  }

  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let tempNode = this.root;
      let _check = (value) => {
        let node = new Node(value);
        try {
          if (node.value > tempNode.value) {
            if (tempNode.right) {
              tempNode = tempNode.right;
              _check(node);
            } else {
              tempNode.right = node;
            }
          }
          if (node.value < tempNode.value) {
            if (tempNode.left) {
              tempNode = tempNode.left;
              _check(node);
            } else {
              tempNode.left = node;
            }
          }
        } catch {
          return "some thing went wrong";
        }
      };
      _check(value);
    }
  }
}

module.exports = BinaryTreeSearch;
