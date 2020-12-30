import Item from '../../types/Item';

export const SpyUmbrella: Item = {
	"id": 108501,
	"name": "Spy Umbrella",
	"buildsFrom": [
		{
			"name": "Umbrella",
			"id": 108401
		},
		{
			"name": "Poison",
			"id": 401302
		}
	],
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
		"attackPower": 50,
		"increaseSkillDamage": 25
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "There is a poisoned needle concealed at the tip of the umbrella. You can make use of it when the timing is right. Pretend to accidentally stab your target's foot with the tip while carrying it on a rainy day.",
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
