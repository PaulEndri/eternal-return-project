import Item from '../../types/Item';

export const Dynamite: Item = {
	"id": 502203,
	"name": "Dynamite",
	"buildsFrom": [
		{
			"name": "Piano Wire",
			"id": 502104
		},
		{
			"name": "Gunpowder",
			"id": 401121
		}
	],
	"buildsInto": [
		{
			"name": "RDX",
			"id": 502307
		}
	],
	"requirements": {
		"Piano Wire": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 502203,
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
