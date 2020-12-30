import Item from '../../types/Item';

export const SwordofJustice: Item = {
	"id": 120302,
	"name": "Sword of Justice",
	"buildsFrom": [
		{
			"name": "Rapier",
			"id": 120201
		},
		{
			"name": "Covert Agent Uniform",
			"id": 202404
		}
	],
	"buildsInto": [
		{
			"name": "Mistilteinn",
			"id": 120402
		}
	],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Monk's Robe": 1,
		"Bandage": 1,
		"Flower": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 30,
		"cooldownReduction": 0.12,
		"criticalStrikeDamage": 0.25,
		"hpRegen": 1.5,
		"spRegenRatio": 2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Historical texts state that Hong Gil-dong, the Robin Hood of ancient Korea, used it.",
	"apiMetaData": {
		"code": 120302,
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
