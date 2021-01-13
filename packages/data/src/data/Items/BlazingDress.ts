import Item from '../../types/Item';

export const BlazingDress: Item = {
	"id": 202416,
	"name": "BlazingDress",
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
		"increaseBasicAttackDamage": 18
	},
	"rarity": "Legend",
	"code": "불꽃드레스",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 205403
		},
		{
			"name": "Scissors",
			"id": 202207
		}
	],
	"displayName": "Blazing Dress",
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
