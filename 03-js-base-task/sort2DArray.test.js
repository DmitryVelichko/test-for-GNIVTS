const sort2DArray = require("./sort2DArray");

test("sort2DArray", () => {
  const input = [
    [2, 1, 3, 0],

    [7, 5, 6, 4],
  ];

  const output = [
    [0, 2, 4, 6],

    [1, 3, 5, 7],
  ];

  expect(sort2DArray(input)).toStrictEqual(output);
});

