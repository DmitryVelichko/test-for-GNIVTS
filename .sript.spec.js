import sleep, { delayPrint } from "./index.js";

describe("Function sleep", () => {
  it("should be defined", () => {
    expect(sleep).toBeDefined();
  });

  it("should be function", () => {
    expect(typeof sleep).toBe("function");
  });

  it("should return Promise", () => {
    expect(sleep(1000)).toBeInstanceOf(Promise);
  });

  it('should return "Delayed print"', () => {
    expect(sleep()).resolves.toBe("Delayed print");
  });

  it("should return Promise after 1 sec", async () => {
    const start = new Date();
    await sleep(1000);
    const end = new Date();
    expect(end - start).toBeCloseTo(1000, -2);
  });
});

describe("Функция sleep", () => {
  it("must return promise", () => {
    expect(sleep(1000)).resolves;
  });

  it('must return string with delay', async () => {
    const data = await delayPrint();
    expect(data).toBe('print');
  });
});
