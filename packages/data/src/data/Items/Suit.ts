import Item from '../../types/Item';

export const Suit: Item = {
	"id": 202303,
	"name": "Suit",
	"buildsInto": [
		202413
	],
	"requirements": {
		"Windbreaker": 1,
		"Branch": 1,
		"Ribbon": 1
	},
	"stats": {
		"increaseBasicAttackDamage": 0.05,
		"increaseSkillDamage": 12
	},
	"rarity": "Rare",
	"code": "정장",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A sharp outfit that can be worn for any special event! Or if your office has a dress code!",
	"buildsFrom": [
		202205,
		205103
	],
	"displayName": "Suit",
	"apiMetaData": {
		"code": 202303,
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
