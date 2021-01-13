import Item from '../../types/Item';

export const IceCoffee: Item = {
	"id": 301206,
	"name": "IceCoffee",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Ice"
		},
		{
			"name": "Scissors",
			"id": "Coffee"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ice": 1,
		"Coffee": 1
	},
	"stats": {
		"spRestore": 530
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Ice Coffee",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301206,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
