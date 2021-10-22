const arr = [
  [2, 1, 3, 0],

  [7, 5, 6, 4],
];

module.exports = function sort2DArray(arr) {

  // Получаем новый массив с объединенными в него подмассивами
  const flattenedArr = arr.flat();

  // Сортируем массив по возрастанию
  const sortedArr = flattenedArr.sort((a, b) => a - b);

  const rowsNum = arr.length;
  const columnsNum = arr[0].length;
  const result = [];

  // Внешний цикл for
  for (let i = 0; i < rowsNum; i++) {
    const newRow = [];

    console.log("1for- " + newRow);

    console.log("i " + i);

    // Внутренний цикл for
    for (let j = 0; j < columnsNum; j++) {
      newRow.push(sortedArr[j * rowsNum + i]);

      console.log("2for- " + newRow);

      console.log("j " + j);
    }

    result.push(newRow);
  }

  return result;
};

