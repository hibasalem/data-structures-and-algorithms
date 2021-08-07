"use strict";

const LinkedList = require("../linked-list-zip");

describe("linked-list zip ", () => {
  it("returns the value of a given index from the end of alinked list", () => {
    const ll = new LinkedList();
    const list1 = new LinkedList();
    list1.insert("4");
    list1.insert("3");
    list1.insert("2");
    list1.insert("1");
    const list2 = new LinkedList();
    list2.insert("7");
    list2.insert("6");
    list2.insert("5");

    expect(ll.zipLists(list1, list2)).toEqual(
      "head -> [1] -> [5] -> [2] -> [6] -> [3] -> [7] -> [4] -> X"
    );
  });
});
