import Item from '../../types/Item';

export const BattleSuit: Item = {
	"id": 202415,
	"name": "BattleSuit",
	"buildsInto": [],
	"requirements": {
		"Windbreaker": 1,
		"Branch": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Rubber": 1
	},
	"stats": {
		"defense": 25,
		"maxHp": 140,
		"preventBasicAttackDamaged": 12,
		"preventSkillDamagedRatio": 0.12
	},
	"rarity": "Epic",
	"code": "배틀수트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A futuristic combat suit. It's made with bulletproof material that makes it great armor. However, when worn in hot areas, you might die of dehydration before encountering a single foe.",
	"buildsFrom": [
		{
			"name": "Bulletproof Vest",
			"id": 202401
		},
		{
			"name": "Diving Suit",
			"id": 202210
		}
	],
	"displayName": "Battle Suit",
	"apiMetaData": {
		"code": 202415,
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
