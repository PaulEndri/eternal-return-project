import Item from '../../types/Item';

export const SpyUmbrella: Item = {
	"id": 108501,
	"name": "SpyUmbrella",
	"buildsInto": [],
	"requirements": {
		"Short Rod": 1,
		"Bamboo": 1,
		"Fan": 1,
		"Paper": 1,
		"Lighter": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 65,
		"increaseSkillDamage": 25
	},
	"rarity": "Epic",
	"code": "스파이의우산",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "There is a poisoned needle concealed at the tip of the umbrella. You can make use of it when the timing is right. Pretend to accidentally stab your target's foot with the tip while carrying it on a rainy day.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 108401
		},
		{
			"name": "Scissors",
			"id": 401302
		}
	],
	"displayName": "Spy Umbrella",
	"apiMetaData": {
		"code": 108501,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
