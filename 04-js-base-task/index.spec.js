const sleep = require("./index.js");

describe("Delay Print Function", () => {
  it("should be a function", () => {
    expect(typeof sleep).toBe("function");
  });

  it("should have a return value", () => {
    expect(sleep).toBeDefined();
  });

  it("must return a promise", () => {
    expect(sleep(1000)).resolves;
  });
});
