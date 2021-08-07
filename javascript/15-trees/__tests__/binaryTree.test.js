"use strict";

const BinaryTree = require("../binaryTree");
const Node = require("../node");

describe("binary tree", () => {
  let tree;

  it("Can successfully instantiate an empty tree", () => {
    tree = new BinaryTree(null);

    expect(tree.root).toBeNull();
  });

  it("Can successfully instantiate a tree with a single root node", () => {
    const a = new Node("a");
    tree = new BinaryTree(a);

    expect(tree.root.value).toBe("a");
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
    // console.log(tree);
  });

  it("Can successfully add a left child and right child to a single root node ", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    let tree = new BinaryTree(a);
    // console.log(tree);

    a.left = b;
    a.right = c;

    // console.log(tree.root.left);

    expect(tree.root.value).toBe("a");
    expect(tree.root.left.value).toBe("b");
    expect(tree.root.right.value).toBe("c");
  });

  it("Can successfully return a collection from a preorder traversal ", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");

    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    let rseult = ["a", "b", "d", "e", "c", "f", "g"];
    expect(tree.preOrder()).toEqual(rseult);
  });

  it("Can successfully return a collection from an inorder traversal ", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");

    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    let rseult = ["d", "b", "e", "a", "f", "c", "g"];
    expect(tree.inOrder()).toEqual(rseult);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");

    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    let rseult = ["d", "e", "b", "f", "g", "c", "a"];
    expect(tree.postOrder()).toEqual(rseult);
  });
});
