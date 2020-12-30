import Item from '../../types/Item';

export const IceWater: Item = {
	"id": "Ice Water",
	"name": "Ice Water",
	"href": "/Ice_Water",
	"buildsFrom": [
		{
			"name": "Ice",
			"id": 301103
		},
		{
			"name": "Water",
			"id": 301102
		}
	],
	"buildsInto": [
		{
			"name": "Cold Noodles",
			"id": "Cold Noodles"
		}
	],
	"requirements": {
		"Ice": 1,
		"Water": 1
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
