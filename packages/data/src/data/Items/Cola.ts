import Item from '../../types/Item';

export const Cola: Item = {
	"id": 301209,
	"name": "Cola",
	"buildsFrom": [
		{
			"name": "Carbonated Water",
			"id": 301107
		},
		{
			"name": "Honey",
			"id": 301101
		}
	],
	"buildsInto": [
		{
			"name": "Smoke Bomb",
			"id": 112402
		},
		{
			"name": "Whiskey Cocktail",
			"id": "Whiskey Cocktail"
		},
		{
			"name": "Can of Cola",
			"id": "Can of Cola"
		}
	],
	"requirements": {
		"Carbonated Water": 1,
		"Honey": 1
	},
	"stats": {
		"spRestore": 400
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"apiMetaData": {
		"code": 301209,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
