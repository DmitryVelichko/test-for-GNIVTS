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


};

