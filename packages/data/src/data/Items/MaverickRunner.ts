import Item from '../../types/Item';

export const MaverickRunner: Item = {
	"id": 204404,
	"name": "MaverickRunner",
	"buildsFrom": [
		{
			"name": "Heelys",
			"id": 204204
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		}
	],
	"buildsInto": [],
	"requirements": {
		"Running Shoes": 1,
		"Iron Ball": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackSpeedRatio": 0.15,
		"moveSpeed": 0.25,
		"moveSpeedOutOfCombat": 0.5
	},
	"rarity": "Rare",
	"code": "전투화",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Heelys designed using futuristic concepts by the world renowned fashion company, Soberef. The parts are even certified by the Federal Aviation Administration. They are driven by linear motors that can get propulsion even when stopped, and there are eight compressed gas injection devices on the front allowing for limited three-dimensional operation. Also, they're LOUD.",
	"displayName": "Maverick Runner",
	"apiMetaData": {
		"code": 204404,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
