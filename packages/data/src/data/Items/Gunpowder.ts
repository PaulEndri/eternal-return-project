import Item from '../../types/Item';

export const Gunpowder: Item = {
	"id": 401121,
	"name": "Gunpowder",
	"buildsInto": [
		110402,
		112202,
		114303,
		117201,
		502203,
		117201,
		502304,
		502306
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "화약",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Temple": 7,
		"Archery Range": 6,
		"Cemetery": 7
	},
	"foundQuantity": 1,
	"description": "Explosive powder. It goes in guns. Boom.",
	"buildsFrom": [],
	"displayName": "Gunpowder",
	"apiMetaData": {
		"code": 401121,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		4
	],
	"airSupply": false,
	"collectible": 0
}
