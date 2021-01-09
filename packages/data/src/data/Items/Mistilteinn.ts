import Item from '../../types/Item';

export const Mistilteinn: Item = {
	"id": 120402,
	"name": "Mistilteinn",
	"buildsInto": [],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Monk's Robe": 1,
		"Bandage": 1,
		"Flower": 1,
		"Stallion Medal": 1,
		"Branch": 1
	},
	"stats": {
		"attackPower": 30,
		"cooldownReduction": 0.12,
		"criticalStrikeDamage": 0.25,
		"hpRegen": 1.5,
		"spRegenRatio": 2,
		"increaseSkillDamageRatio": 0.15
	},
	"rarity": "Legend",
	"code": "미스틸테인",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Sword of Justice",
			"id": 120302
		},
		{
			"name": "Branch",
			"id": 108101
		}
	],
	"displayName": "Mistilteinn",
	"apiMetaData": {
		"code": 120402,
		"category": "Weapon",
		"type": "Rapier"
	},
	"clientMetaData": {
		"type": "Rapier",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
