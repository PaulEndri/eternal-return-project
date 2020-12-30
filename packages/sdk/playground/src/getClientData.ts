import fs from 'fs';
import { ErBsClient, MetaTypes } from 'erbs-client';

const client = new ErBsClient();

const writeFile = (name: string, content) => {
	fs.writeFileSync(`src/generated/clientData/${name}.json`, JSON.stringify(content, null, 2));
};

const wait3 = () => {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000 * 3);
	});
};

const getClientData = async () => {
	const weapons = await client.getWeapons();
	await wait3();
	const armors = await client.getArmors();
	await wait3();
	const consumables = await client.getConsumables();
	await wait3();
	const misc = await client.getMaterials();
	await wait3();
	const special = await client.getSpecialItems();
	await wait3();
	const spawns = await client.getItemSpawns();
	await wait3();
	const locations = await client.getMetaData(MetaTypes.Area);
	await wait3();
	const connections = await client.getMetaData(MetaTypes.NearByArea);
	await wait3();
	const animals = await client.getMetaData(MetaTypes.Monster);
	await wait3();
	const howToFind = await client.getMetaData(MetaTypes.HowToFindItem);
	await wait3();
	const characters = await client.getCharacters();

	return {
		weapons,
		armors,
		consumables,
		misc,
		special,
		spawns,
		locations,
		connections,
		animals,
		howToFind,
		characters
	};
};

getClientData()
	.then((data) => {
		Object.entries(data).forEach(([ name, content ]) => writeFile(name, content));

		return 'ok';
	})
	.then(() => console.log('DONE BRO'));
