import Item from '../../types/Item';

export const Mask: Item = {
	"id": 201201,
	"name": "Mask",
	"buildsInto": [
		201402,
		201411
	],
	"requirements": {
		"Hairband": 1,
		"Feather": 1
	},
	"stats": {
		"cooldownReduction": 0.04,
		"defense": 10,
		"maxSp": 130,
		"moveSpeed": 0.08
	},
	"rarity": "Uncommon",
	"code": "가면",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If you can escape from Lumia Island, try visiting the Carnival of Venice. It's one of the most popular festivals in the world, but you can visit only if you manage to get out of here alive.",
	"buildsFrom": [
		201101,
		205101
	],
	"displayName": "Mask",
	"apiMetaData": {
		"code": 201201,
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
