"use strict";

let breadthFirst = (tree) => {
  let breadthFirstArr = [];

  breadthFirstArr.push(tree.root.value);
  let _travers = (node) => {
    // console.log(node);
    // console.log(breadthFirstArr);

    breadthFirstArr.push(node.left.value);
    breadthFirstArr.push(node.right.value);
    if (node.left.left) _travers(node.left);
    if (node.right.right) _travers(node.right);
  };

  _travers(tree.root);

  // console.log(breadthFirstArr);
  return breadthFirstArr;
};

module.exports = breadthFirst;
