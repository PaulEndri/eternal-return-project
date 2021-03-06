import Item from '../../types/Item';

export const SunsetArmor: Item = {
	"id": 202402,
	"name": "SunsetArmor",
	"buildsInto": [],
	"requirements": {
		"Fabric Armor": 1,
		"Leather": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"defense": 28,
		"maxHp": 360
	},
	"rarity": "Rare",
	"code": "석양의갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made of leather, it features a ruby that shines like a bright, red sun",
	"buildsFrom": [
		202201,
		401204
	],
	"displayName": "Sunset Armor",
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
