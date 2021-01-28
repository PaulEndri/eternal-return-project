import Item from '../../types/Item';

export const Oil: Item = {
	"id": 401112,
	"name": "Oil",
	"buildsInto": [
		102401,
		112203,
		114301,
		116201,
		117403,
		121306,
		401202,
		401203
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "오일",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Avenue": 8,
		"Archery Range": 5,
		"Factory": 7,
		"Uptown": 7
	},
	"foundQuantity": 1,
	"description": "At room temperature, this fatty component exists in liquid form.",
	"buildsFrom": [],
	"displayName": "Oil",
	"apiMetaData": {
		"code": 401112,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
