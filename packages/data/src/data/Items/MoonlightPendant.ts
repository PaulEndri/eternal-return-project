import Item from '../../types/Item';

export const MoonlightPendant: Item = {
	"id": 205401,
	"name": "Moonlight Pendant",
	"buildsFrom": [
		{
			"name": "Ribbon",
			"id": 205103
		},
		{
			"name": "Moonstone",
			"id": 401301
		}
	],
	"buildsInto": [
		{
			"name": "Magic Stick",
			"id": 104405
		}
	],
	"requirements": {
		"Ribbon": 1,
		"Meteorite": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 20,
		"lifeSteal": 0.2
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It is not just a simple pendant. Magical powers are unleashed when shining a particular light through it.",
	"apiMetaData": {
		"code": 205401,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
