import Item from '../../types/Item';

export const BulletproofVest: Item = {
	"id": 202401,
	"name": "BulletproofVest",
	"buildsInto": [
		202415,
		202417
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
		"increaseSkillDamage": 10
	},
	"rarity": "Rare",
	"code": "방탄조끼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A vest used to protect your torso from bullets. The rest of the body is still vulnerable, though",
	"buildsFrom": [
		202205,
		401213
	],
	"displayName": "Bulletproof Vest",
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
