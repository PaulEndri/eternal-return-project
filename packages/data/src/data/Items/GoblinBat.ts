import Item from '../../types/Item';

export const GoblinBat: Item = {
	"id": 108301,
	"name": "Goblin Bat",
	"buildsFrom": [
		{
			"name": "Long Rod",
			"id": 108202
		},
		{
			"name": "Nail",
			"id": 401101
		}
	],
	"buildsInto": [
		{
			"name": "Mallet",
			"id": 108404
		}
	],
	"requirements": {
		"Short Rod": 1,
		"Bamboo": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 30,
		"decreaseRecoveryToBasicAttack": 1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A supernatural demon from the East that is said to be playful with humans. Westerns may identify them as an \"Imp.\"",
	"apiMetaData": {
		"code": 108301,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
