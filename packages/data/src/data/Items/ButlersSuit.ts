import Item from '../../types/Item';

export const ButlersSuit: Item = {
	"id": 202413,
	"name": "ButlersSuit",
	"buildsFrom": [
		{
			"name": "Suit",
			"id": 202303
		},
		{
			"name": "Feather Duster",
			"id": 205209
		}
	],
	"buildsInto": [],
	"requirements": {
		"Windbreaker": 1,
		"Branch": 1,
		"Ribbon": 1,
		"Short Rod": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 30,
		"lifeSteal": 0.2,
		"moveSpeed": 0.1,
		"preventBasicAttackDamaged": 10
	},
	"rarity": "Epic",
	"code": "집사복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A graceful and courteous attitude, a soft tone, and a swallow-tailed black coat are the essentials of a butler. We can get a taste of high society by looking at them.",
	"displayName": "Butler's Suit",
	"apiMetaData": {
		"code": 202413,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
