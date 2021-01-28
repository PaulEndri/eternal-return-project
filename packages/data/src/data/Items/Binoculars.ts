import Item from '../../types/Item';

export const Binoculars: Item = {
	"id": 205110,
	"name": "Binoculars",
	"buildsInto": [
		201405,
		205206,
		502207
	],
	"requirements": {},
	"stats": {
		"attackPower": 2,
		"sightRange": 1.5
	},
	"rarity": "Common",
	"code": "쌍안경",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 6,
		"Factory": 7,
		"Hotel": 6,
		"Beach": 6
	},
	"foundQuantity": 1,
	"description": "These don't seem to zoom in much. Perhaps it's because they're homemade.",
	"buildsFrom": [],
	"displayName": "Binoculars",
	"apiMetaData": {
		"code": 205110,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		2,
		4
	],
	"airSupply": false,
	"collectible": 0
}
