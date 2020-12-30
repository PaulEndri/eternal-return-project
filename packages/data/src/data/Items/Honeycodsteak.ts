import Item from '../../types/Item';

export const Honeycodsteak: Item = {
	"id": "Honey cod steak",
	"name": "Honey cod steak",
	"href": "/Honey_cod_steak",
	"buildsFrom": [
		{
			"name": "Cod",
			"id": "Cod"
		},
		{
			"name": "Honey",
			"id": 301101
		}
	],
	"buildsInto": [
		{
			"name": "Gleipnir",
			"id": "Gleipnir"
		}
	],
	"requirements": {
		"Cod": 1,
		"Honey": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"clientMetaData": {
		"type": "Food",
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
