import Item from '../../types/Item';

export const Dáinsleif: Item = {
	"id": 102501,
	"name": "Dáinsleif",
	"buildsFrom": [
		{
			"name": "VF Blood Sample",
			"id": 401401
		},
		{
			"name": "Katana",
			"id": 102301
		}
	],
	"buildsInto": [],
	"requirements": {
		"VF Blood Sample": 1,
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 70,
		"lifeSteal": 0.2
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 102501,
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
