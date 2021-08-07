"use strict";

const AnimalShelter = require("../stack-queue-animal-shelter");

describe("stacks", () => {
  it("Can successfully enqueue a cat into cat queue ", () => {
    const animalShelter = new AnimalShelter();
    let test = { pref: "cat" };

    expect(animalShelter.enqueue(test)).toMatchObject(test);
  });

  it("Can successfully enqueue a dog into dog queue ", () => {
    const animalShelter = new AnimalShelter();
    let test = { pref: "dog" };
    expect(animalShelter.enqueue(test)).toMatchObject(test);
  });

  it("do not add if input is not cat or dog ", () => {
    const animalShelter = new AnimalShelter();
    let test = { pref: "fish" };

    expect(animalShelter.enqueue(test)).toBe("invalid input");
  });

  it("Can successfully dequeue a cat  ", () => {
    const animalShelter = new AnimalShelter();
    let test = { pref: "cat" };

    animalShelter.enqueue(test);

    expect(animalShelter.dequeue("cat")).toMatchObject(test);
  });

  it("Can successfully dequeue a dog  ", () => {
    const animalShelter = new AnimalShelter();
    let test = { pref: "dog" };
    let test2 = { pref: "dog" };

    animalShelter.enqueue(test);

    expect(animalShelter.dequeue("dog")).toMatchObject(test);
  });

  it("do not dequeue when queue is empty ", () => {
    const animalShelter = new AnimalShelter();
    let test = { pref: "fish" };

    expect(animalShelter.dequeue("fish")).toBeNull();
  });
});
