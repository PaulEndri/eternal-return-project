import Item from '../../types/Item';

export const CanofCola: Item = {
	"id": "Can of Cola",
	"name": "Can of Cola",
	"href": "/Can_of_Cola",
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
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
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
