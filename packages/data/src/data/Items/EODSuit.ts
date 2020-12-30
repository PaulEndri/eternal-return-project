import Item from '../../types/Item';

export const EODSuit: Item = {
	"id": "EOD Suit",
	"name": "EOD Suit",
	"href": "/EOD_Suit",
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
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
