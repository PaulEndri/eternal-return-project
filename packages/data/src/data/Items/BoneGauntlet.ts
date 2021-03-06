import Item from '../../types/Item';

export const BoneGauntlet: Item = {
	"id": 110401,
	"name": "BoneGauntlet",
	"buildsInto": [
		110405,
		110410
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
		"moveSpeed": -0.05
	},
	"rarity": "Rare",
	"code": "귀골장갑",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Armored gloves made from a turtle shell.",
	"buildsFrom": [
		110301,
		401104
	],
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
