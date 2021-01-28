import Item from '../../types/Item';

export const ShortSpear: Item = {
	"id": 107101,
	"name": "ShortSpear",
	"buildsInto": [
		107201,
		107302,
		115403,
		118301
	],
	"requirements": {},
	"stats": {
		"attackPower": 15
	},
	"rarity": "Common",
	"code": "단창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 4,
		"Pond": 5,
		"Forest": 4
	},
	"foundQuantity": 1,
	"description": "A spear with a short shaft - about half the size of a long spear. Learn how to move freely during battle while wielding this weapon and attack with a fearless combat posture.",
	"buildsFrom": [],
	"displayName": "Short Spear",
	"apiMetaData": {
		"code": 107101,
		"category": "Weapon",
		"type": "Spear"
	},
	"clientMetaData": {
		"type": "Spear",
		"category": "Weapon"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
