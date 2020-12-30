import Item from '../../types/Item';

export const Stingburst: Item = {
	"id": 502402,
	"name": "Stingburst",
	"buildsFrom": [
		{
			"name": "RDX",
			"id": 502307
		},
		{
			"name": "Spiked Plank",
			"id": 502201
		}
	],
	"buildsInto": [
		{
			"name": "Petal Torrent",
			"id": 113502
		}
	],
	"requirements": {
		"Piano Wire": 1,
		"Gunpowder": 1,
		"Scrap Metal": 1,
		"Mousetrap": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 8
	},
	"rarity": "Epic",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 502402,
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
