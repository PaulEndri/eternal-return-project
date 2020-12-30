import Item from '../../types/Item';

export const BrasilGauntlet: Item = {
	"id": 110410,
	"name": "Brasil Gauntlet",
	"buildsFrom": [
		{
			"name": "Bone Gauntlet",
			"id": 110401
		},
		{
			"name": "Oilcloth",
			"id": 401202
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Turtle Shell": 1,
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {
		"attackPower": 48,
		"attackSpeedRatio": 0.3,
		"defense": 13,
		"hpRegen": 1,
		"moveSpeed": -0.1
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A combat glove used on the mystical island Brasil, which is located  west side of Ireland. This island can only be seen once every seven years. (Not to be confused with the country Brazil)",
	"apiMetaData": {
		"code": 110410,
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
