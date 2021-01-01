import Item from '../../types/Item';

export const SpearOfLonginus: Item = {
	"id": 107501,
	"name": "SpearOfLonginus",
	"buildsFrom": [
		{
			"name": "VF Blood Sample",
			"id": 401401
		},
		{
			"name": "Pike",
			"id": 107302
		}
	],
	"buildsInto": [],
	"requirements": {
		"VF Blood Sample": 1,
		"Short Spear": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 140,
		"lifeSteal": 0.2
	},
	"rarity": "Legend",
	"code": "롱기누스의창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Though its origins may be unclear, this spear is said to have been involved in mythical holiness. Texts say that this spear has the ability to heal its owner under certain conditions.",
	"displayName": "Spear of Longinus",
	"apiMetaData": {
		"code": 107501,
		"category": "Weapon",
		"type": "Spear"
	},
	"clientMetaData": {
		"type": "Spear",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}