import Item from '../../types/Item';

export const EODSuit: Item = {
	"id": 202417,
	"name": "EODSuit",
	"buildsInto": [],
	"requirements": {
		"Windbreaker": 1,
		"Branch": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Monk's Robe": 1,
		"Bandage": 1
	},
	"stats": {
		"defense": 20,
		"hpRegen": 1,
		"lifeSteal": 0.1,
		"maxHp": 300,
		"increaseSkillDamage": 12
	},
	"rarity": "Epic",
	"code": "EOD수트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Originally developed as a bulletproof vest, often used at bomb disposal sites due to its protection.",
	"buildsFrom": [
		202401,
		202206
	],
	"displayName": "EOD Suit",
	"apiMetaData": {
		"code": 202417,
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
