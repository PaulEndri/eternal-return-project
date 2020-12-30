import Item from '../../types/Item';

export const Masamune: Item = {
	"id": 102401,
	"name": "Masamune",
	"buildsFrom": [
		{
			"name": "Katana",
			"id": 102301
		},
		{
			"name": "Oil",
			"id": 401112
		}
	],
	"buildsInto": [
		{
			"name": "Arondight",
			"id": 102406
		}
	],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 40,
		"attackSpeedRatio": 0.15
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A sword made by Masamune, the greatest sword maker in the history of Japan. It stands as one of the strongest and sharpest swords of Japan.",
	"apiMetaData": {
		"code": 102401,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
