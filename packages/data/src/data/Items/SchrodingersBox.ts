import Item from '../../types/Item';

export const SchrodingersBox: Item = {
	"id": 205404,
	"name": "SchrodingersBox",
	"buildsInto": [],
	"requirements": {
		"Box": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {
		"maxHp": 380,
		"increaseSkillDamageRatio": 7
	},
	"rarity": "Rare",
	"code": "슈뢰딩거의상자",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The cat inside the box is both alive and dead at the same time. Use it to show off your knowledge of quantum physics.",
	"buildsFrom": [
		205107,
		401302
	],
	"displayName": "Schrodinger's Box",
	"apiMetaData": {
		"code": 205404,
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
