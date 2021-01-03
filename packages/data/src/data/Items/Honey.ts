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
			"id": 301211
		},
		{
			"name": "Honey Water",
			"id": 301215
		},
		{
			"name": "Hot Honey Water",
			"id": 301302
		},
		{
			"name": "Honey cod steak",
			"id": 302201
		},
		{
			"name": "Honey Garlic Pickle",
			"id": 302232
		},
		{
			"name": "Honey Butter",
			"id": 302315
		}
	],
	"requirements": {},
	"stats": {
		"spRestore": 250
	},
	"rarity": "Common",
	"code": "꿀",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Alley": 5,
		"Avenue": 6,
		"Forest": 6
	},
	"foundQuantity": 2,
	"displayName": "Honey",
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
