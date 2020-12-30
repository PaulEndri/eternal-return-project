import Item from '../../types/Item';

export const WaterBottle: Item = {
	"id": "Water Bottle",
	"name": "Water Bottle",
	"href": "/Water_Bottle",
	"buildsFrom": [
		{
			"name": "Water",
			"id": 301102
		},
		{
			"name": "Glass Bottle",
			"id": 112104
		}
	],
	"buildsInto": [],
	"requirements": {
		"Water": 1,
		"Glass Bottle": 1
	},
	"stats": {
		"spRestore": 350
	},
	"rarity": "Uncommon",
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
