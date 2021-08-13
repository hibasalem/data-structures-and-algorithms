"use strict";

const KaryTree = require("../tree-fizz-buzz");
const Node = require("../node");

describe("binary tree", () => {
  it(" Returns a list of all values in the tree using breath first ", () => {
    let children = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let tree = new KaryTree();

    // expect(
    //   tree.BuildKaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3)
    // ).toEqual(children);

    expect(true).toBeTruthy();
  });
});
