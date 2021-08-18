"use strict";

const Hashtable = require("./hashtable");

let treeIntersection = (tree1, tree2) => {
  let resultArr = [];

  if (!tree1.root && !tree2.root) return null;
  if (!tree1 || !tree2) return null;

  const hashmap = new Hashtable(2000);

  const _add = (node) => {
    // console.log("hi");
    hashmap.add(node.value, node.value);

    if (node.left) _add(node.left);
    if (node.right) _add(node.right);
  };
  _add(tree1.root);

  const _check = (node) => {
    // console.log("hi check");
    if (!node) return;

    // console.log(hashmap.contains(node.value));
    if (hashmap.contains(node.value) !== false) {
      resultArr.push(node.value);
    }
    if (node.left) _check(node.left);
    if (node.right) _check(node.right);
  };
  _check(tree2.root);

  return resultArr;
};

module.exports = treeIntersection;
