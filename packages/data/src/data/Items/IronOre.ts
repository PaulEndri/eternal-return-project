import Item from '../../types/Item';

export const IronOre: Item = {
	"id": 401118,
	"name": "IronOre",
	"buildsInto": [
		110202,
		120201,
		401201,
		502202
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "철광석",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Cemetery": 7,
		"Hotel": 7,
		"Forest": 7
	},
	"foundQuantity": 3,
	"description": "Just the ore. Extract the iron to make it useful!",
	"buildsFrom": [],
	"displayName": "Iron Ore",
	"apiMetaData": {
		"code": 401118,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
