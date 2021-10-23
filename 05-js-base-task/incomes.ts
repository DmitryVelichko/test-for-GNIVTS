//  incoming.json

type Districts = {
	code: string;
	caption: string;
	value: number;
	subitems: Subitems[];
}

type Regions = {
	code: string;
	caption: string;
	value: number;
	subitems: Subitems[];
}

type Country = {
		caption: string;
		value: number;
	}

type Year = {
	country: Country;
	districts: Districts[];
	regions: Districts[];
}


type Subitems = {
	caption: string;
	value: number;
}

type Incomings = {
	2019: Year;
	2020: Year;
}

// geo.json 

type Geo = {
	caption: string;
	shortCaption: string;
	code: string;
	regions: Region[];
}

type Region = {
	code: string;
	caption: string;
}
