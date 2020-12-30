import Item from '../../types/Item';

export const LeatherGloves: Item = {
	"id": 110201,
	"name": "Leather Gloves",
	"buildsFrom": [
		{
			"name": "Cotton Gloves",
			"id": 110102
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "Phoenix Gloves",
			"id": 110404
		},
		{
			"name": "Imperial Silk Gloves",
			"id": 110412
		}
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 18
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 110201,
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
