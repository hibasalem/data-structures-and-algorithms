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
  });

  it("Can successfully add a left child and right child to a single root node ", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    let tree = new BinaryTree(a);

    a.left = b;
    a.right = c;

    expect(tree.root.value).toBe("a");
    expect(tree.root.left).toBe("b");
    expect(tree.root.right).toBe("c");
  });

  it("Can successfully return a collection from a preorder traversal ", () => {});

  it("Can successfully return a collection from an inorder traversal ", () => {});

  it("Can successfully return a collection from a postorder traversal", () => {});
});
