import Item from '../../types/Item';

export const SmartBomb: Item = {
	"id": 502502,
	"name": "SmartBomb",
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
		"attackPower": "#REF!"
	},
	"rarity": "Legend",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"displayName": "Smart Bomb",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502502,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
