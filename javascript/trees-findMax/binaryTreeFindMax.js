"use strict";

const Node = require("./node");

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    let resultArr = [];
    let _travers = (node) => {
      resultArr.push(node.value);
      // console.log(node.value);
      if (node.left) {
        _travers(node.left);
      }
      if (node.right) {
        _travers(node.right);
      }
    };
    _travers(this.root);
    return resultArr;
  }

  inOrder() {
    let resultArr = [];
    let _travers = (node) => {
      if (node.left) {
        _travers(node.left);
      }
      resultArr.push(node.value);
      if (node.right) {
        _travers(node.right);
      }
    };
    _travers(this.root);
    return resultArr;
  }

  postOrder() {
    let resultArr = [];
    let _travers = (node) => {
      if (node.left) {
        _travers(node.left);
      }
      if (node.right) {
        _travers(node.right);
      }
      resultArr.push(node.value);
    };
    _travers(this.root);
    return resultArr;
  }

  findMax() {
    let maxValue;
    let _findMax = (node) => {
      // console.log(node);
      if (!maxValue) {
        maxValue = node.value;
      }
      if (node.value > maxValue) {
        maxValue = node.value;
      }
      if (node.left) {
        _findMax(node.left);
      }
      if (node.right) {
        _findMax(node.right);
      }
    };
    _findMax(this.root);
    return maxValue;
  }
}

module.exports = BinaryTree;
