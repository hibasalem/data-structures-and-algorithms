"use strict";

const PseudoQueue = require("../stack-queue-pseudo");

describe("stacks", () => {
  it("Can successfully add onto a PseudoQueue ", () => {
    // const stack = new Stack();
    // stack.push("test1");
    // expect(stack.top.value).toBe("test1");
    // expect(stack.top.next).toBe(null);
  });

  it("Can successfully add multiple values onto a PseudoQueue", () => {
    // const stack = new Stack();
    // stack.push("test1");
    // stack.push("test2");
    // stack.push("test3");
    // stack.push("test4");
    // expect(stack.top.value).toBe("test4");
    // expect(stack.top.next.value).toBe("test3");
    // expect(stack.top.next.next.value).toBe("test2");
    // expect(stack.top.next.next.next.value).toBe("test1");
    // expect(stack.top.next.next.next.next).toBe(null);
  });

  it("Can successfully dequeue off the stack", () => {
    // const stack = new Stack();
    // stack.push("test1");
    // stack.push("test2");
    // stack.push("test3");
    // expect(stack.pop()).toBe("test3");
  });

  it("Can successfully dequeue a stack after multiple pops", () => {
    // const stack = new Stack();
    // stack.push("test1");
    // stack.push("test2");
    // stack.push("test3");
    // expect(stack.pop()).toBe("test3");
    // expect(stack.pop()).toBe("test2");
    // expect(stack.pop()).toBe("test1");
    // expect(stack.pop()).toBe("stack is empty");
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    // const stack = new Stack();
    // expect(stack.peek()).toBe("stack is empty");
    // expect(stack.pop()).toBe("stack is empty");
  });
});
