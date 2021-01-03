import Item from '../../types/Item';

export const VeritasLuxMea: Item = {
	"id": 205405,
	"name": "VeritasLuxMea",
	"buildsFrom": [
		{
			"name": "Buddha Sarira",
			"id": 205207
		},
		{
			"name": "Saint's Relic",
			"id": 205202
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
	"code": "진리는나의빛",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Truth is my light.",
	"displayName": "Veritas Lux Mea",
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
