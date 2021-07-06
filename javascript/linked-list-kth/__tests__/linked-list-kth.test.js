"use strict";

const LinkedList = require("../linked-list-kth");

describe("linked-list insertion ", () => {
  it("returns the value of a given index from the end of alinked list", () => {
    const ll = new LinkedList();

    ll.insert("test0");
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    ll.insert("test4");
    ll.insert("test5");
    ll.insert("test6");

    expect(ll.kthFromEnd(3)).toEqual("test3");
    expect(ll.kthFromEnd(5)).toEqual("test5");
    expect(ll.kthFromEnd(10)).toEqual(
      "k is larger than the lenth of the linked list"
    );
    expect(ll.kthFromEnd(-5)).toEqual("insert positive value ");
  });
});
