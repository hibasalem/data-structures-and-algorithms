"use strict";

const LinkedList = require("../linkedList");

describe("Linked List", () => {
  it("Can successfully instantiate an empty linked list", () => {
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();
  });
  it("Adds a new node with that value to the head", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    expect(ll.head.value).toBe("test1");
    expect(ll.head.next).toBeNull();

    // console.log(ll);
  });

  it("The head property will properly point to the first node in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");

    expect(ll.head.value).toBe("test3");
    expect(ll.head.next).toBeTruthy();
  });
  it("Can properly insert multiple nodes into the head of a linked list ", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");

    expect(ll.head.value).toBe("test3");
    expect(ll.head.next.value).toBe("test2");
    expect(ll.head.next.next.value).toBe("test1");
    expect(ll.head.next.next.next).toBeNull();
  });
  it("Will return true when finding a value within the linked list that exists", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    expect(ll.includes("test2")).toBe(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    expect(ll.includes("test3")).toBe(false);
  });

  it("Can properly return a collection of all the values that exist in the linked list", () => {
    const ll = new LinkedList();
    ll.insert("test3");
    ll.insert("test2");
    ll.insert("test1");

    expect(ll.toString()).toBe("{ test1 } -> { test2 } -> { test3 } -> NULL");
  });

  // it("log", () => {
  // consoleSpy = jest.spyOn(console, "log").mockImplementation();
  // const ll = new LinkedList();
  // ll.insert();
  // ll.insert("");
  // expect(consoleSpy).toHaveBeenCalled();
  // consoleSpy.mockRestore();
  //
  // });
});
