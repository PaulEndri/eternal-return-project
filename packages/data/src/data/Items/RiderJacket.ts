import Item from '../../types/Item';

export const RiderJacket: Item = {
	"id": 202301,
	"name": "Rider Jacket",
	"buildsFrom": [
		{
			"name": "Leather Jacket",
			"id": 202202
		},
		{
			"name": "Steel Chain",
			"id": 119101
		}
	],
	"buildsInto": [
		{
			"name": "Rocker's Jacket",
			"id": "Rocker's Jacket"
		}
	],
	"requirements": {
		"Windbreaker": 1,
		"Leather": 1,
		"Steel Chain": 1
	},
	"stats": {
		"defense": 11,
		"maxHp": 70,
		"preventBasicAttackDamaged": 9
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Worn more often as a fashion statement than for actual riding.",
	"apiMetaData": {
		"code": 202301,
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
