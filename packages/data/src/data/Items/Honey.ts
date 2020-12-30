import Item from '../../types/Item';

export const Honey: Item = {
	"id": 301101,
	"name": "Honey",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Cola",
			"id": 301209
		},
		{
			"name": "Honey Milk",
			"id": "Honey Milk"
		},
		{
			"name": "Honey Water",
			"id": "Honey Water"
		},
		{
			"name": "Hot Honey Water",
			"id": "Hot Honey Water"
		},
		{
			"name": "Honey cod steak",
			"id": "Honey cod steak"
		},
		{
			"name": "Honey Garlic Pickle",
			"id": "Honey Garlic Pickle"
		},
		{
			"name": "Honey Butter",
			"id": "Honey Butter"
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 250
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Alley": 5,
		"Avenue": 6,
		"Forest": 6
	},
	"foundQuantity": 2,
	"apiMetaData": {
		"code": 301101,
		"category": "Consume",
		"type": "Beverage"
	},
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
