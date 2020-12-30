import Item from '../../types/Item';

export const CottonGloves: Item = {
	"id": 110102,
	"name": "Cotton Gloves",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Leather Gloves",
			"id": 110201
		},
		{
			"name": "Gauntlet",
			"id": 110301
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 7
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Hospital": 4,
		"Hotel": 4
	},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 110102,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
