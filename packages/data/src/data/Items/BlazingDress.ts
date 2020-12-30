import Item from '../../types/Item';

export const BlazingDress: Item = {
	"id": 202416,
	"name": "Blazing Dress",
	"buildsFrom": [
		{
			"name": "True Samadhi Fire",
			"id": 205403
		},
		{
			"name": "Dress",
			"id": 202207
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Lighter": 1,
		"Cloth": 1,
		"Scissors": 1
	},
	"stats": {
		"defense": 25,
		"hpRegen": 2.5,
		"spRegen": 3,
		"spRegenRatio": 0.75,
		"increaseBasicAttackDamage": 22
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 202416,
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
