import Item from '../../types/Item';

export const TheLegendofTheGeneral: Item = {
	"id": "The Legend of The General",
	"name": "The Legend of The General",
	"href": "/The_Legend_of_The_General",
	"buildsFrom": [
		{
			"name": "Steel Bow",
			"id": 115401
		},
		{
			"name": "Oilcloth",
			"id": 401202
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
	"clientMetaData": {
		"type": "CrossBow",
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
