import Item from '../../types/Item';

export const RDX: Item = {
	"id": 502307,
	"name": "RDX",
	"buildsFrom": [
		{
			"name": "Dynamite",
			"id": 502203
		},
		{
			"name": "Scrap Metal",
			"id": 401106
		}
	],
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
