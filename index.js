const _ = require('lodash');
const geo = require('./geo.json');

const listOfCaption = _.map(geo, 'caption');

const federalDistricts = _.reduce(geo, (acc, cur) => {
	acc[cur.code] = cur.shortCaption;
	return acc;
}, {});

const numberOfDistricts = _.size(geo);

const sortOfDictrict = _.sortBy(geo,  (geo) => {
	return geo.code
});


console.log(listOfCaption);
console.log(federalDistricts);
console.log(numberOfDistricts);
console.log(sortOfDictrict);