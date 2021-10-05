const _ = require('lodash');
const geo = require('./geo.json');

const listOfCaption = _.map(geo, 'caption');

const federalDistricts = _.reduce(geo, (acc, cur) => {
	acc[cur.code] = cur.shortCaption;
	return acc;
}, {});

const numberOfDistricts = _.size(geo);

