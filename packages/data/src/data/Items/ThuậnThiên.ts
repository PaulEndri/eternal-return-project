import Item from '../../types/Item';

export const ThuậnThiên: Item = {
	"id": "Thuận Thiên",
	"name": "Thuận Thiên",
	"href": "/Thuận_Thiên",
	"buildsFrom": [
		{
			"name": "Bastard Sword",
			"id": 102403
		},
		{
			"name": "Turtle Shell",
			"id": 401104
		}
	],
	"buildsInto": [],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"attackPower": 77,
		"defense": 25,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"clientMetaData": {
		"type": "Two-Handed Sword",
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
