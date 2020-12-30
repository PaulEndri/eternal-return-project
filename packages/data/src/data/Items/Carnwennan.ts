import Item from '../../types/Item';

export const Carnwennan: Item = {
	"id": 101401,
	"name": "Carnwennan",
	"buildsFrom": [
		{
			"name": "Rose Knife",
			"id": 101301
		},
		{
			"name": "Saint's Relic",
			"id": 205202
		}
	],
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Flower": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 26,
		"cooldownReduction": 0.1,
		"hpRegen": 1.5,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1,
		"increaseBasicAttackDamage": 29
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 101401,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
