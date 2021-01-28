import Item from '../../types/Item';

export const Hammer: Item = {
	"id": 104101,
	"name": "Hammer",
	"buildsInto": [
		104201,
		401204,
		401213
	],
	"requirements": {},
	"stats": {
		"attackPower": 16
	},
	"rarity": "Common",
	"code": "망치",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 10,
		"Pond": 7,
		"Beach": 6
	},
	"foundQuantity": 1,
	"description": "Try not to hammer your finger instead of the nail...",
	"buildsFrom": [],
	"displayName": "Hammer",
	"apiMetaData": {
		"code": 104101,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
