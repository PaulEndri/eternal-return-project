import Item from '../../types/Item';

export const Gauntlet: Item = {
	"id": 110301,
	"name": "Gauntlet",
	"buildsInto": [
		{
			"name": "Bone Gauntlet",
			"id": 110401
		},
		{
			"name": "Shatter Shell Gauntlet",
			"id": 110402
		}
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 32,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "건틀릿",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Gloves that knights wore to protect their hands.",
	"buildsFrom": [
		{
			"name": "Cotton Gloves",
			"id": 110102
		},
		{
			"name": "Steel",
			"id": 401201
		}
	],
	"displayName": "Gauntlet",
	"apiMetaData": {
		"code": 110301,
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
