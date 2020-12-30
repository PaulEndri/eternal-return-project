import Item from '../../types/Item';

export const EODSuit: Item = {
	"id": 202417,
	"name": "EOD Suit",
	"buildsFrom": [
		{
			"name": "Bulletproof Vest",
			"id": 202401
		},
		{
			"name": "Patched Robe",
			"id": 202206
		}
	],
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
		"cooldownReduction": 0.1,
		"defense": 15,
		"hpRegen": 1,
		"maxHp": 300,
		"preventBasicAttackDamaged": 10
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Originally developed as a bulletproof vest, often used at bomb disposal sites due to its protection.",
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
