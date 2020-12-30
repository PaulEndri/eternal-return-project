import Item from '../../types/Item';

export const HiddenMaiden: Item = {
	"id": "Hidden Maiden",
	"name": "Hidden Maiden",
	"href": "/Hidden_Maiden",
	"buildsFrom": [
		{
			"name": "Spiked Plank",
			"id": 502201
		},
		{
			"name": "Jungle Guillotine",
			"id": "Jungle Guillotine"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mousetrap": 2,
		"Nail": 1,
		"Kitchen Knife": 1
	},
	"stats": {
		"attackPower": 8
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
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
