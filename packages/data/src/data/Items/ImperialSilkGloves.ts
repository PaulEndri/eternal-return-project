import Item from '../../types/Item';

export const ImperialSilkGloves: Item = {
	"id": 110412,
	"name": "Imperial Silk Gloves",
	"buildsFrom": [
		{
			"name": "Mithril String",
			"id": 502401
		},
		{
			"name": "Leather Gloves",
			"id": 110201
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mithril": 1,
		"Piano Wire": 1,
		"Cotton Gloves": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 85,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 110412,
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
