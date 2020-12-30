import Item from '../../types/Item';

export const Ribbon: Item = {
	"id": 205103,
	"name": "Ribbon",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Suit",
			"id": 202303
		},
		{
			"name": "Doll",
			"id": 205205
		},
		{
			"name": "Moonlight Pendant",
			"id": 205401
		}
	],
	"requirements": {},
	"stats": {
		"lifeSteal": 0.05
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 6,
		"School": 7,
		"Uptown": 7
	},
	"foundQuantity": 1,
	"description": "It'll be pretty if you put it in your hair.",
	"apiMetaData": {
		"code": 205103,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
