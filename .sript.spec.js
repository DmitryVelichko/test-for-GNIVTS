import sleep from "./script.js";

describe("Function sleep", () => {
  it("should be defined", () => {
    expect(sleep).toBeDefined();
  });

  it('should be function', () => {
    expect(typeof sleep).toBe('function');
});


});
