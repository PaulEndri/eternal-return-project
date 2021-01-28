import Item from '../../types/Item';

export const Tiara: Item = {
	"id": 201303,
	"name": "Tiara",
	"buildsInto": [
		201404
	],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"cooldownReduction": 0.07,
		"defense": 14,
		"maxSp": 460
	},
	"rarity": "Rare",
	"code": "티아라",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A crown-like accessory for the head. Worn by both princesses and beauty pagent winners.",
	"buildsFrom": [
		201202,
		401109
	],
	"displayName": "Tiara",
	"apiMetaData": {
		"code": 201303,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
