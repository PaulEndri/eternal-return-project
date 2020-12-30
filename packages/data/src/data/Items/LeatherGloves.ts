import Item from '../../types/Item';

export const LeatherGloves: Item = {
	"id": 110201,
	"name": "Leather Gloves",
	"href": "/Leather_Gloves",
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
			"id": "Imperial Silk Gloves"
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
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": 110201,
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
