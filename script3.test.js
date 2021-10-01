const sortMatrix = require('./script3');

describe('sortMatrix', () => {



  it('should correct sort 2d array', () => {
    const input = [
      [1, 4, 6],
      [5, 3, 9],
      [2, 8, 7],
    ];
    const output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ];
    expect(sortMatrix(input)).toStrictEqual(output);
  });


});

