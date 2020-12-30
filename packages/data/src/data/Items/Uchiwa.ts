import Item from '../../types/Item';

export const Uchiwa: Item = {
	"id": 205302,
	"name": "Uchiwa",
	"buildsFrom": [
		{
			"name": "Doll",
			"id": 205205
		},
		{
			"name": "Fan",
			"id": 205105
		}
	],
	"buildsInto": [],
	"requirements": {
		"Ribbon": 1,
		"Cloth": 1,
		"Fan": 1
	},
	"stats": {
		"lifeSteal": 0.15,
		"spRegenRatio": 1,
		"increaseSkillDamage": 21
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A fan with your favorite celebrity's face printed on it. It might block the view of the person behind you, so keep it at home during the concert.",
	"apiMetaData": {
		"code": 205302,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
