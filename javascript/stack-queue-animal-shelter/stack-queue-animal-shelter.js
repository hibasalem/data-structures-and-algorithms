const Queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if (animal.pref == "dog") {
      this.dog.enqueue(animal);
      return animal;
    } else if (animal.pref == "cat") {
      this.cat.enqueue(animal);
      return animal;
    } else {
      return "invalid input";
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      return this.dog.dequeue();
    } else if (pref === "cat") {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
