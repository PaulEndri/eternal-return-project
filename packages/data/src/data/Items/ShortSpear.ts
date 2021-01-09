import Item from '../../types/Item';

export const ShortSpear: Item = {
	"id": 107101,
	"name": "ShortSpear",
	"buildsInto": [
		{
			"name": "Bamboo Spear",
			"id": 107201
		},
		{
			"name": "Pike",
			"id": 107302
		},
		{
			"name": "Ballista",
			"id": 115403
		},
		{
			"name": "Harpoon Gun",
			"id": 118301
		}
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
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
