"use strict";

const PseudoQueue = require("../stack-queue-pseudo");

describe("seudo queue", () => {
  it("Can successfully add onto a PseudoQueue ", () => {
    const pesudo = new PseudoQueue();
    expect(pesudo.enqueue(5)).toBe(5);
  });

  it("Can successfully add multiple values onto a PseudoQueue", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(20);
    pesudo.enqueue(15);
    pesudo.enqueue(10);
    pesudo.enqueue(5);

    expect(pesudo.stackA.top.value).toBe(5);
    expect(pesudo.stackA.top.next.value).toBe(10);
    expect(pesudo.stackA.top.next.next.value).toBe(15);
    expect(pesudo.stackA.top.next.next.next.value).toBe(20);
    expect(pesudo.stackA.top.next.next.next.next).toBeNull();
  });

  it("Can successfully dequeue off the stack", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(5);
    expect(pesudo.dequeue()).toBe(5);
  });

  it("Can successfully dequeue a stack after multiple pops", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(20);
    pesudo.enqueue(15);
    pesudo.enqueue(10);
    pesudo.enqueue(5);
    expect(pesudo.dequeue()).toBe(20);
    expect(pesudo.dequeue()).toBe(15);
    expect(pesudo.dequeue()).toBe(10);
    expect(pesudo.dequeue()).toBe(5);
  });

  it("Can successfully dequeue a stack after multiple pops", () => {
    const pesudo = new PseudoQueue();
    pesudo.enqueue(20);
    pesudo.enqueue(15);
    pesudo.dequeue();
    pesudo.enqueue(10);
    pesudo.enqueue(5);
    expect(pesudo.dequeue()).toBe(15);
    expect(pesudo.dequeue()).toBe(10);
    expect(pesudo.dequeue()).toBe(5);
  });

  it("Calling dequeue on empty pesudo raises exception", () => {
    const pesudo = new PseudoQueue();
    expect(pesudo.dequeue()).toBe("stack is empty");
  });
});
