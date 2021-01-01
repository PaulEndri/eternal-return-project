import Item from '../../types/Item';

export const CanOfCola: Item = {
	"id": 301309,
	"name": "CanOfCola",
	"buildsFrom": [
		{
			"name": "Cola",
			"id": 301209
		},
		{
			"name": "Can",
			"id": 401120
		}
	],
	"buildsInto": [],
	"requirements": {
		"Carbonated Water": 1,
		"Honey": 1,
		"Can": 1
	},
	"stats": {
		"spRestore": 1400
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Can of Cola",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301309,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
