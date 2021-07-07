"use strict";

const LinkedList = require("../linked-list-reverse");

describe("linked-list revirse ", () => {
  it("returns a reversed linked list", () => {
    const ll = new LinkedList();
    const list1 = new LinkedList();
    list1.insert("4");
    list1.insert("3");
    list1.insert("2");
    list1.insert("1");

    expect(ll.reverse(list1)).toEqual("head -> [4] -> [3] -> [2] -> [1] -> X");
  });
});
