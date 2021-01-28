import Item from '../../types/Item';

export const WhitePowder: Item = {
	"id": 401206,
	"name": "WhitePowder",
	"buildsInto": [
		107402,
		110411,
		111401,
		112301,
		113410,
		118406,
		121406,
		502404
	],
	"requirements": {
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "백색가루",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "Unidentifiable white powder. Probably from chalk...",
	"buildsFrom": [
		113104,
		112101
	],
	"displayName": "White Powder",
	"apiMetaData": {
		"code": 401206,
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
