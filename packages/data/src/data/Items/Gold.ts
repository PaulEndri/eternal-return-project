import Item from '../../types/Item';

export const Gold: Item = {
	"id": 401214,
	"name": "Gold",
	"buildsInto": [
		105404,
		109401,
		112501,
		114403,
		118401,
		121201,
		201401,
		201410,
		202412,
		203302
	],
	"requirements": {
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "황금",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "Soft, valuable, and gorgeous. A must have for any piece of jewelery.",
	"buildsFrom": [
		105102,
		401114
	],
	"displayName": "Gold",
	"apiMetaData": {
		"code": 401214,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
