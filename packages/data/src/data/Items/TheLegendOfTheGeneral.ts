import Item from '../../types/Item';

export const TheLegendOfTheGeneral: Item = {
	"id": 115402,
	"name": "TheLegendOfTheGeneral",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": "Steel Bow"
		},
		{
			"name": "Scissors",
			"id": "Oilcloth"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Crossbow": 1,
		"Bamboo": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {
		"attackPower": 75,
		"attackSpeedRatio": 0.5,
		"charges": 6,
		"hpRegen": 2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "The Legend of The General",
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": 115402,
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
