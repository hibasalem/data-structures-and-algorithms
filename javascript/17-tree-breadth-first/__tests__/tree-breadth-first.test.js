"use strict";

const BinaryTree = require("../binaryTree");
const breadthFirst = require("../tree-breadth-first");
const Node = require("../node");

describe("binary tree", () => {
  it(" Returns a list of all values in the tree using breath first ", () => {
    const a = new Node(10);
    const b = new Node(20);
    const c = new Node(5);
    const d = new Node(35);
    const e = new Node(40);
    const f = new Node(30);
    const g = new Node(8);

    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    let rseult = [10, 20, 5, 35, 40, 30, 8];
    expect(breadthFirst(tree)).toEqual(rseult);
  });
});
