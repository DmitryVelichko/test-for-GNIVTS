const arr = [[2,1,3,0], 
             [7,5,6,4]]

const sortMatrix = (arr) => {

  const flattenedArr = arr.flat();

  const sortedArr = flattenedArr.sort((a, b) => a - b);

  
  const rowsNum = arr.length;
  const columnsNum = arr[0].length;
  const result = [];

  for (let i = 0; i < rowsNum; i++) {
    const newRow = [];
    console.log("1for- " + newRow);
    console.log("i " + i)

    for (let j = 0; j < columnsNum; j++) {
      newRow.push(sortedArr[j * rowsNum + i]);
      console.log('2for- ' + newRow)
      console.log("j " + j)
    }

    result.push(newRow);
  }

  return result;
};

const result = sortMatrix(arr);

console.log(result)

