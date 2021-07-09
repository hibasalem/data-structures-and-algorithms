"use strict";

const LinkedList = require("../linked-list-insertions");

describe("linked-list insertion ", () => {
  it(" add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.append("test1");
    expect(ll.head.value).toEqual("test1");
    expect(ll.head.next).toBeNull();
  });

  it("add multiple nodes to the end of a linked list", () => {
    const ll = new LinkedList();
    ll.append("test1");
    ll.append("test2");
    ll.append("test3");
    expect(ll.head.value).toEqual("test1");
    // console.log(ll.head.next);
    expect(ll.head.next.value).toEqual("test2");
    expect(ll.head.next.next.value).toEqual("test3");
    expect(ll.head.next.next.next).toBeNull();
  });

  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.insert("test3");
    ll.insert("test2");
    ll.insert("test1");
    ll.insertBefore("test2", "test4");
    expect(ll.head.value).toEqual("test1");
    expect(ll.head.next.value).toEqual("test4");
    expect(ll.head.next.next.value).toEqual("test2");
    expect(ll.head.next.next.next.value).toEqual("test3");
    expect(ll.head.next.next.next.next).toBeNull();
  });

  it("Can successfully insert a node before the first node of a linked list ", () => {
    const ll = new LinkedList();
    ll.insert("test2");
    ll.insert("test1");
    ll.insertBefore("test1", "test3");
    expect(ll.head.value).toEqual("test3");
    expect(ll.head.next.value).toEqual("test1");
    expect(ll.head.next.next.value).toEqual("test2");
    expect(ll.head.next.next.next).toBeNull();
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test3");
    ll.insert("test2");
    ll.insert("test1");
    ll.insertAfter("test2", "test4");
    expect(ll.head.value).toEqual("test1");
    expect(ll.head.next.value).toEqual("test2");
    expect(ll.head.next.next.value).toEqual("test4");
    expect(ll.head.next.next.next.value).toEqual("test3");
    expect(ll.head.next.next.next.next).toBeNull();
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test2");
    ll.insert("test1");
    ll.insertAfter("test2", "test3");
    expect(ll.head.value).toEqual("test1");
    expect(ll.head.next.value).toEqual("test2");
    expect(ll.head.next.next.value).toEqual("test3");
    expect(ll.head.next.next.next).toBeNull();
  });
});
