import Item from '../../types/Item';

export const CrystalTiara: Item = {
	"id": 201404,
	"name": "CrystalTiara",
	"buildsInto": [],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Stallion Medal": 1,
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"criticalStrikeChance": 0.2,
		"defense": 14,
		"maxSp": 700
	},
	"rarity": "Epic",
	"code": "수정티아라",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A tiara made of crystals. The intricacies are impressive.",
	"buildsFrom": [
		201303,
		205204
	],
	"displayName": "Crystal Tiara",
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
