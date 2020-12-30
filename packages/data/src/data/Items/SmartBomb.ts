import Item from '../../types/Item';

export const SmartBomb: Item = {
	"id": "Smart Bomb",
	"name": "Smart Bomb",
	"href": "/Smart_Bomb",
	"buildsFrom": [
		{
			"name": "RDX",
			"id": 502307
		},
		{
			"name": "Cell Phone",
			"id": 501401
		}
	],
	"buildsInto": [],
	"requirements": {
		"Piano Wire": 2,
		"Gunpowder": 1,
		"Scrap Metal": 1,
		"Fountain Pen": 1,
		"Paper": 1,
		"Battery": 1
	},
	"stats": {
		"attackPower": 8
	},
	"rarity": "Legend",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
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
