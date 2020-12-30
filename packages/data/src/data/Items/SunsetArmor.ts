import Item from '../../types/Item';

export const SunsetArmor: Item = {
	"id": 202402,
	"name": "Sunset Armor",
	"buildsFrom": [
		{
			"name": "Leather Armor",
			"id": 202201
		},
		{
			"name": "Ruby",
			"id": 401204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Fabric Armor": 1,
		"Leather": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"defense": 28,
		"maxHp": 450
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made of leather, it features a ruby that shines like a bright, red sun",
	"apiMetaData": {
		"code": 202402,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
