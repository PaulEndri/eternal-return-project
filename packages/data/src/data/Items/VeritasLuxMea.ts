import Item from '../../types/Item';

export const VeritasLuxMea: Item = {
	"id": 205405,
	"name": "Veritas Lux Mea",
	"buildsFrom": [
		{
			"name": "Buddha Sarira",
			"id": 205207
		},
		{
			"name": "Saint's Relic",
			"id": "Saint's Relic"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Buddhist Scripture": 1,
		"Monk's Robe": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"hpRegenRatio": 1.5,
		"increaseBasicAttackDamage": 12,
		"increaseSkillDamageRatio": 0.08
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Truth is my light.",
	"apiMetaData": {
		"code": 205405,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
