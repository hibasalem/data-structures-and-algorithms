"use strict";

const validateBrackets = require("../validateBrackets");

describe("brackets", () => {
  it("returns true when there is opining and closing brackect  ", () => {
    expect(validateBrackets("{}")).toBe(true);
    expect(validateBrackets("{}(){}")).toBe(true);
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
    expect(validateBrackets("(){}[[]]")).toBe(true);
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });
  it("returns false  when there is not opining and closing brackect  ", () => {
    expect(validateBrackets("[({}]")).toBe(false);
    expect(validateBrackets("(](")).toBe(false);
    expect(validateBrackets("{")).toBe(false);
    expect(validateBrackets(")")).toBe(false);
    expect(validateBrackets("[}")).toBe(false);
  });
});
