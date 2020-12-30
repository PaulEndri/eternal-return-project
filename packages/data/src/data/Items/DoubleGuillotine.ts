import Item from '../../types/Item';

export const DoubleGuillotine: Item = {
	"id": "Double Guillotine",
	"name": "Double Guillotine",
	"href": "/Double_Guillotine",
	"buildsFrom": [
		{
			"name": "Jungle Guillotine",
			"id": "Jungle Guillotine"
		},
		{
			"name": "Pendulum Axe",
			"id": "Pendulum Axe"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mousetrap": 1,
		"Kitchen Knife": 1,
		"Snare": 1,
		"Bamboo": 1,
		"Hatchet": 1
	},
	"stats": {
		"attackPower": 8
	},
	"rarity": "Epic",
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
