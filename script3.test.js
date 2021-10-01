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

  it('should correct sort 2d rectangular array', () => {
    const input = [
      [1, 4, 6, 12],
      [5, 3, 9, 11],
      [2, 8, 7, 10],
    ];
    const output = [
      [1, 4, 7, 10],
      [2, 5, 8, 11],
      [3, 6, 9, 12],
    ];
   
  });
});

