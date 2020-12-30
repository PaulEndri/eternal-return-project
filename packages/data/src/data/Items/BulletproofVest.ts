import Item from '../../types/Item';

export const BulletproofVest: Item = {
	"id": 202401,
	"name": "Bulletproof Vest",
	"buildsFrom": [
		{
			"name": "Military Suit",
			"id": 202205
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		}
	],
	"buildsInto": [
		{
			"name": "Battle Suit",
			"id": "Battle Suit"
		},
		{
			"name": "EOD Suit",
			"id": "EOD Suit"
		}
	],
	"requirements": {
		"Windbreaker": 1,
		"Branch": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"defense": 10,
		"maxHp": 130,
		"preventBasicAttackDamaged": 10
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A vest used to protect your torso from bullets. The rest of the body is still vulnerable, though",
	"apiMetaData": {
		"code": 202401,
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
