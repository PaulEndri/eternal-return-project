import Item from '../../types/Item';

export const HiddenMaiden: Item = {
	"id": 502407,
	"name": "HiddenMaiden",
	"buildsFrom": [
		{
			"name": "Spiked Plank",
			"id": 502201
		},
		{
			"name": "Jungle Guillotine",
			"id": 502303
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mousetrap": 2,
		"Nail": 1,
		"Kitchen Knife": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"displayName": "Hidden Maiden",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502407,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
