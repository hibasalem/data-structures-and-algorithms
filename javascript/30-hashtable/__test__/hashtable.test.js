"use strict";

const LinkedList = require("../linkedList");
const Node = require("../node");
const Hashtable = require("../hashtable");

describe("hashtable", () => {
  beforeEach(() => {
    // const hashmap = new Hashtable(100);
  });

  it("Adding a key/value to the hashtable results in the value being in the data structure  ", () => {
    const hashmap = new Hashtable(100);
    let testObj = { head: { next: null, value: { test: "testValue" } } };
    hashmap.add("test", "testValue");
    expect(hashmap.storage[hashmap.hash("test")]).toMatchObject(testObj);
  });
  it("Retrieving based on a key returns the value stored", () => {
    const hashmap = new Hashtable(100);
    hashmap.add("test", "testValue");
    expect(hashmap.get("test").test).toBe("testValue");
  });
  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    const hashmap = new Hashtable(100);
    expect(hashmap.get("test")).toBeNull();
  });
  it("Successfully handle a collision within the hashtable", () => {
    const hashmap = new Hashtable(100);
    let testObj = {
      head: {
        next: { next: null, value: { test: "testValue" } },
        value: { tset: "testValue" },
      },
    };

    hashmap.add("test", "testValue");
    hashmap.add("tset", "testValue");

    expect(hashmap.storage[hashmap.hash("test")]).toMatchObject(testObj);
  });
  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const hashmap = new Hashtable(100);
    let testObj = { tset: "testValue" };

    hashmap.add("test", "testValue");
    hashmap.add("tset", "testValue");
    expect(hashmap.get("tset")).toMatchObject(testObj);
  });
  it("Successfully hash a key to an in-range value", () => {
    const hashmap = new Hashtable(100);
    expect(hashmap.hash("test")).toBeLessThan(100);
    expect(hashmap.hash("hiba")).toBeLessThan(100);
  });
});
