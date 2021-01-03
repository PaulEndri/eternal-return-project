import Item from '../../types/Item';

export const BoneGauntlet: Item = {
	"id": 110401,
	"name": "BoneGauntlet",
	"buildsFrom": [
		{
			"name": "Gauntlet",
			"id": 110301
		},
		{
			"name": "Turtle Shell",
			"id": 401104
		}
	],
	"buildsInto": [
		{
			"name": "One Inch Punch",
			"id": 110405
		},
		{
			"name": "Brasil Gauntlet",
			"id": 110410
		}
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Turtle Shell": 1
	},
	"stats": {
		"attackPower": 35,
		"defense": 13,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "귀골장갑",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armored gloves made from a turtle shell.",
	"displayName": "Bone Gauntlet",
	"apiMetaData": {
		"code": 110401,
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
