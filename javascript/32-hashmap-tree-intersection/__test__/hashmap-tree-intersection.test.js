"use strict";

// const LinkedList = require("../linkedList");
// const Node = require("../node");
// const Hashtable = require("../hashtable");
const treeIntersection = require("../hashmap-tree-intersection");
const BinaryTree = require("../../15-trees/binaryTree");
const TreeNode = require("../../15-trees/node");

describe("repeated word", () => {
  const a = new TreeNode("10");
  const b = new TreeNode("20");
  const c = new TreeNode("5");
  const d = new TreeNode("35");
  const e = new TreeNode("40");
  const f = new TreeNode("30");
  const g = new TreeNode("8");

  let tree1 = new BinaryTree(a);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;

  const a2 = new TreeNode("10");
  const b2 = new TreeNode("20");
  const c2 = new TreeNode("45");
  const d2 = new TreeNode("78");
  const e2 = new TreeNode("98");
  const f2 = new TreeNode("30");
  const g2 = new TreeNode("8");

  let tree2 = new BinaryTree(a2);

  a2.left = b2;
  a2.right = c2;
  b2.left = d2;
  b2.right = e2;
  c2.left = f2;
  c2.right = g2;

  let tree3 = new BinaryTree();
  let tree4 = new BinaryTree();

  it("return an array with the correct values ", () => {
    expect(treeIntersection(tree1, tree2)).toStrictEqual([
      "10",
      "20",
      "30",
      "8",
    ]);
  });

  it("return empty array if no intersiction", () => {
    expect(treeIntersection(tree1, tree3)).toStrictEqual([]);
  });

  it("return null in empty trees", () => {
    expect(treeIntersection(tree3, tree4)).toBeNull();
  });
});
