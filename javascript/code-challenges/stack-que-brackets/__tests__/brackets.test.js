"use strict";
const validateBrackets = require("../brackets.js");

describe("testing brackets", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });
  afterEach[
    () => {
      consoleSpy.mockRestore();
    }
  ];

  it("testing", () => {
    expect(validateBrackets("{}")).toBeTruthy;
    expect(validateBrackets("{}(){}")).toBeTruthy;
    expect(validateBrackets("})]")).toBeFalsy;
    expect(validateBrackets("{)")).toBeFalsy;
  });
  it("error", () => {
    validateBrackets([1, 3, 4]);
    expect(consoleSpy).toHaveBeenCalledWith("expression must be a string");
  });
});
