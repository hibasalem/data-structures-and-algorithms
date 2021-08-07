"use strict";

const BinaryTreeSearch = require("../binaryTreeSearch");
const Node = require("../node");

describe("binary tree", () => {
  it("returns true if the tree contain the value ", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");

    let tree = new BinaryTreeSearch(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    expect(tree.contains("b")).toBe(true);
  });

  it("returns false if the tree do not contain the value ", () => {
    const a = new Node("a");
    const b = new Node("b");
    const c = new Node("c");
    const d = new Node("d");
    const e = new Node("e");
    const f = new Node("f");
    const g = new Node("g");

    let tree = new BinaryTreeSearch(a);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    expect(tree.contains("h")).toBe(false);
  });

  it("Can successfully add a node to an empty tree ", () => {
    let tree = new BinaryTreeSearch();
    tree.add(8);

    expect(tree.root.value).toBe(8);
  });

  it("Can successfully add a node with a value bigger than the root to a tree ", () => {
    let tree = new BinaryTreeSearch();
    tree.add(8);
    tree.add(15);

    expect(tree.root.value).toBe(8);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right.value).toBe(15);
  });

  it("Can successfully add a node with a value smaller than the root to a tree ", () => {
    let tree = new BinaryTreeSearch();
    tree.add(8);
    tree.add(5);

    expect(tree.root.value).toBe(8);
    expect(tree.root.right).toBeNull();
    expect(tree.root.left.value).toBe(5);
  });
});
