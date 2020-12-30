import Item from '../../types/Item';

export const GlassPieces: Item = {
	"id": 205204,
	"name": "Glass Pieces",
	"buildsFrom": [
		{
			"name": "Glass Bottle",
			"id": 112104
		},
		{
			"name": "Stone",
			"id": 112101
		}
	],
	"buildsInto": [
		{
			"name": "Hovud",
			"id": 102411
		},
		{
			"name": "Glass Knuckles",
			"id": 110403
		},
		{
			"name": "Crystal Tiara",
			"id": 201404
		},
		{
			"name": "Killer Heels",
			"id": 204403
		},
		{
			"name": "Glass Panel",
			"id": 401305
		}
	],
	"requirements": {
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"criticalStrikeChance": 0.13
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Be careful not to cut yourself on the sharp edges.",
	"apiMetaData": {
		"code": 205204,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
