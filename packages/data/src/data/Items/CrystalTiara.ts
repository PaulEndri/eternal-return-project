import Item from '../../types/Item';

export const CrystalTiara: Item = {
	"id": 201404,
	"name": "Crystal Tiara",
	"buildsFrom": [
		{
			"name": "Tiara",
			"id": 201303
		},
		{
			"name": "Glass Pieces",
			"id": 205204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Stallion Medal": 1,
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"criticalStrikeChance": 0.22,
		"defense": 14,
		"maxSp": 700
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A tiara made of crystals. The intricacies are impressive.",
	"apiMetaData": {
		"code": 201404,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
