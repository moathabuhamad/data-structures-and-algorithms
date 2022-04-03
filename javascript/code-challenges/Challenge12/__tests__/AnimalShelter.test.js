"use strict";
const AnimalShelter = require("../AnimalShelter.js");

describe("testing AnimalShelter class", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("testing AnimalShelter initialization", () => {
    let shelter = new AnimalShelter();
    expect(shelter.back).toBeNull();
    expect(shelter.front).toBeNull();
  });
  it("testing enqueue", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue("cat");
    expect(shelter.back.value).toEqual("cat");
    expect(shelter.front.value).toEqual("cat");
    shelter.enqueue("dog");
    expect(shelter.back.value).toEqual("dog");
    expect(shelter.front.value).toEqual("cat");
    shelter.enqueue("monkey");
    expect(consoleSpy).toHaveBeenCalledWith(
      "animal can be only a dog or a cat."
    );
  });
  it("testing dequeue", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue("cat");
    shelter.enqueue("cat");
    shelter.enqueue("dog");
    shelter.enqueue("dog");
    let pref1 = shelter.dequeue("dog");
    expect(pref1).toEqual("dog");
    expect(shelter.back.value).toEqual("dog");
    expect(shelter.front.value).toEqual("cat");
    pref1 = shelter.dequeue("cat");
    expect(pref1).toEqual("cat");
    expect(shelter.back.value).toEqual("dog");
  });
  it("testing dequeue from empty back", () => {
    let shelter = new AnimalShelter();
    shelter.dequeue("cat");
    expect(consoleSpy).toHaveBeenCalledWith("Empty shelter");
  });
  it("testing dequeue with unavailable pref", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue("cat");
    let pref1 = shelter.dequeue("dog");
    expect(pref1).toBeNull();
  });
});
