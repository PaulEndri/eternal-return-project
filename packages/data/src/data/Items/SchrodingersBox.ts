import Item from '../../types/Item';

export const SchrodingersBox: Item = {
	"id": "Schrodinger's Box",
	"name": "Schrodinger's Box",
	"href": "/Schrodinger's_Box",
	"buildsFrom": [
		{
			"name": "Box",
			"id": 205107
		},
		{
			"name": "Poison",
			"id": 401302
		}
	],
	"buildsInto": [],
	"requirements": {
		"Box": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {
		"maxHp": 420,
		"increaseSkillDamage": 7
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The cat inside the box is both alive and dead at the same time. Use it to show off your knowledge of quantum physics.",
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
