import Item from '../../types/Item';

export const Gemstone: Item = {
	"id": 401114,
	"name": "Gemstone",
	"buildsInto": [
		102402,
		401204,
		401214
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "원석",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Temple": 8,
		"Pond": 10,
		"Forest": 10,
		"Beach": 9
	},
	"foundQuantity": 1,
	"description": "An unrefined gemstone. Could be worth something in the right hands.",
	"buildsFrom": [],
	"displayName": "Gemstone",
	"apiMetaData": {
		"code": 401114,
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
