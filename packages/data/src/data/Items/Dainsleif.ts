import Item from '../../types/Item';

export const Dainsleif: Item = {
	"id": 102501,
	"name": "Dainsleif",
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
	"displayName": "Dáinsleif",
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": 102501,
		"type": "TwoHandSword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
