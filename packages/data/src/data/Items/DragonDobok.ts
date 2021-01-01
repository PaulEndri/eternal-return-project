import Item from '../../types/Item';

export const DragonDobok: Item = {
	"id": 202411,
	"name": "DragonDobok",
	"buildsFrom": [
		{
			"name": "Qipao",
			"id": 202304
		},
		{
			"name": "Turtle Dobok",
			"id": 202203
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cloth": 1,
		"Scissors": 1,
		"Razor": 1,
		"Monk's Robe": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"attackPower": 11,
		"attackRange": 1,
		"cooldownReduction": 0.1,
		"defense": 10,
		"spRegenRatio": 1.5
	},
	"rarity": "Epic",
	"code": "용의도복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A martial arts uniform designed for mental and physical training. You only qualify to wear this if you fulfill a particular set of prerequisites.",
	"displayName": "Dragon Dobok",
	"apiMetaData": {
		"code": 202411,
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
