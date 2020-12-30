import Item from '../../types/Item';

export const LeatherJacket: Item = {
	"id": 202202,
	"name": "Leather Jacket",
	"buildsFrom": [
		{
			"name": "Windbreaker",
			"id": 202101
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "Rider Jacket",
			"id": 202301
		}
	],
	"requirements": {
		"Windbreaker": 1,
		"Leather": 1
	},
	"stats": {
		"defense": 8,
		"maxHp": 70,
		"preventBasicAttackDamaged": 6
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A reliable jacket that doesn't tear easily. Useful in most weather conditions.",
	"apiMetaData": {
		"code": 202202,
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
