import Item from '../../types/Item';

export const Florentine: Item = {
	"id": 103301,
	"name": "Florentine",
	"buildsFrom": [
		{
			"name": "Twin Swords",
			"id": 103201
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"buildsInto": [
		{
			"name": "Divine Dual Swords",
			"id": 103401
		}
	],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1,
		"Fountain Pen": 1,
		"Paper": 1
	},
	"stats": {
		"attackPower": 23,
		"attackSpeedRatio": 0.1,
		"lifeSteal": 0.1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The master of these swords from Florence says you can't use them seperately. One in each hand at all times.",
	"apiMetaData": {
		"code": 103301,
		"category": "Weapon",
		"type": "DualSword"
	},
	"clientMetaData": {
		"type": "Dual Swords",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
