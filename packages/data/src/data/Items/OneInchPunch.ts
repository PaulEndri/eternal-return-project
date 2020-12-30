import Item from '../../types/Item';

export const OneInchPunch: Item = {
	"id": 110405,
	"name": "One Inch Punch",
	"buildsFrom": [
		{
			"name": "Bone Gauntlet",
			"id": 110401
		},
		{
			"name": "Doll",
			"id": 205205
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Turtle Shell": 1,
		"Ribbon": 1,
		"Cloth": 1
	},
	"stats": {
		"attackPower": 50,
		"defense": 25,
		"lifeSteal": 0.1,
		"spRegenRatio": 0.5
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 110405,
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
