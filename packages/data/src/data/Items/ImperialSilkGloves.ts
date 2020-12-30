import Item from '../../types/Item';

export const ImperialSilkGloves: Item = {
	"id": "Imperial Silk Gloves",
	"name": "Imperial Silk Gloves",
	"href": "/Imperial_Silk_Gloves",
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
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
