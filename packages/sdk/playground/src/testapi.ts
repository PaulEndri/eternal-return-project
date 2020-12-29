import fetch from 'node-fetch';

const base = 'https://open-api.bser.io';

const stuff = 'v1/data/hash';

const Headers = {
	'x-api-key': 'NVstb76ova2O5Jc4hGgpG6zDeXBfaNT45aAj1I5V'
};

fetch(`${base}/${stuff}`, { Headers }).then((res) => res.json()).then((data) => {
	console.log(JSON.stringify(data, null, 2));
});
