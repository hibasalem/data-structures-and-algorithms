"use strict";

const Node = require("../node");

describe("node module test", () => {
  it("creat a node with value and a refrence to the left and right ", () => {
    const testValue = "test";
    const node = new Node(testValue);

    expect(node instanceof Node).toBeTruthy();
    expect(node.value).toBe(testValue);
    expect(node.right).toBeNull();
    expect(node.left).toBeNull();
  });
});
