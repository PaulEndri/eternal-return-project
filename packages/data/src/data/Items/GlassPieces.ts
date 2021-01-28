import Item from '../../types/Item';

export const GlassPieces: Item = {
	"id": 205204,
	"name": "GlassPieces",
	"buildsInto": [
		102411,
		110403,
		201404,
		204405,
		401305
	],
	"requirements": {
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"criticalStrikeChance": 0.13
	},
	"rarity": "Uncommon",
	"code": "유리조각",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Be careful not to cut yourself on the sharp edges.",
	"buildsFrom": [
		112104,
		112101
	],
	"displayName": "Glass Pieces",
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
