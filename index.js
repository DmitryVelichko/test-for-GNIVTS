const arr = [[2,1,3], [3,2,1]]

const sortMatrix = (arr) => {
  const sortedNumbers = arr.flat().sort((a, b) => a - b);
  const rowsCount = arr.length;
  const colsCount = arr[0].length;
  const result = [];

  for (let i = 0; i < rowsCount; i++) {
    const newRow = [];

    for (let j = 0; j < colsCount; j++) {
      newRow.push(sortedNumbers[j * rowsCount + i]);
    }

    result.push(newRow);
  }

  return result;
};

const result = sortMatrix(arr);

