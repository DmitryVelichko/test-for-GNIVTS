const intersection = (arr1, arr2) => {
	const intersectArr = arr1.reduce((accumulator, currentValue) => {
		if (arr2.includes(currentValue) && !accumulator.includes(currentValue)){ accumulator.push(currentValue);}
		return accumulator;
	}, []);

	return intersectArr;
}

const arr1 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'c', 'd'];
const arr2 = [3, 4, 5, 6, 7, 'c', 'c', 'd', 'e', 'f'];

intersection(arr1, arr2);