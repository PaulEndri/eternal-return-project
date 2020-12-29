import fetch from 'node-fetch';

const base = 'https://open-api.bser.io';

const stuff = 'v1/data/hash';

const Headers = {
	'x-api-key': process.env.API_KEY
};

fetch(`${base}/${stuff}`, { Headers }).then((res) => res.json()).then((data) => {
	console.log(JSON.stringify(data, null, 2));
});
