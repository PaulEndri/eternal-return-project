import Item from '../../types/Item';

export const Volticletto: Item = {
	"id": 120403,
	"name": "Volticletto",
	"buildsFrom": [
		{
			"name": "Apricot Sword",
			"id": 120301
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		}
	],
	"buildsInto": [],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Flower": 1,
		"Playing Cards": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 47,
		"attackSpeedRatio": 0.35,
		"cooldownReduction": 0.1,
		"criticalStrikeChance": 0.1,
		"criticalStrikeDamage": 0.25
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The word \"Volticletto\" is a portmanteau of 'voltaic,' meaning related to electric current, and the Italian 'Stiletto knife'. Punctures from this weapon cause double the pain.",
	"apiMetaData": {
		"code": 120403,
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
