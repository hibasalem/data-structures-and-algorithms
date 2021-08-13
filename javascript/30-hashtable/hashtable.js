"use strict";

const LinkedList = require("./linkedList");

class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll;
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }
  get(key) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      return null;
    } else {
      return this.storage[hash].head.value;
    }
  }

  contains(key) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      return false;
    } else {
      return true;
    }
  }

  hash(key) {
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }
}

module.exports = Hashtable;
