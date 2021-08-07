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
  it("Validate whether or not a Linked List is palindrome", () => {
    const ll = new LinkedList();
    const list = new LinkedList();

    list.insert("1");
    list.insert("2");
    list.insert("2");
    list.insert("1");

    const list2 = new LinkedList();
    list2.insert("1");
    list2.insert("2");
    list2.insert("3");
    list2.insert("4");

    expect(ll.palindrome(list2)).toBe(false);
    expect(ll.palindrome(list)).toBe(true);
  });
});
