import Item from '../../types/Item';

export const RDX: Item = {
	"id": 502307,
	"name": "RDX",
	"buildsInto": [
		{
			"name": "High Explosive Grenade",
			"id": 112404
		},
		{
			"name": "The Golden Ghost",
			"id": 115405
		},
		{
			"name": "Stingburst",
			"id": 502402
		},
		{
			"name": "C-4",
			"id": 502404
		},
		{
			"name": "Smart Bomb",
			"id": 502502
		}
	],
	"requirements": {
		"Piano Wire": 1,
		"Gunpowder": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Rare",
	"code": "RDX",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 502203
		},
		{
			"name": "Scissors",
			"id": 401106
		}
	],
	"displayName": "RDX",
	"apiMetaData": {
		"code": 502307,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
