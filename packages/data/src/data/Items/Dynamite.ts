import Item from '../../types/Item';

export const Dynamite: Item = {
	"id": 502203,
	"name": "Dynamite",
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
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"code": "다이너마이트",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 502104
		},
		{
			"name": "Scissors",
			"id": 401121
		}
	],
	"displayName": "Dynamite",
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
