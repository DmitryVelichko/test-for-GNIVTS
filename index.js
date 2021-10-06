const _ = require("lodash");
const geo = require("./geo.json");

const incomings = require("./incomings.json");

// Из массива geo сделать объект "Федеральные округа" - ключ code (числовое значение), значение caption (название федерального округа)
const createFederalDistricsObj = () => {
	const obj = {};
	_.forEach(geo,  (item) => {
		return (obj[item.code] = item.caption);
	  });
	return obj;
  };
  
  