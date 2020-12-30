import Item from '../../types/Item';

export const SaintsRelic: Item = {
	"id": 205202,
	"name": "Saint's Relic",
	"buildsFrom": [
		{
			"name": "Cross",
			"id": 205109
		},
		{
			"name": "Holy Grail",
			"id": 205108
		}
	],
	"buildsInto": [
		{
			"name": "Carnwennan",
			"id": 101401
		},
		{
			"name": "Hammer of Dagda",
			"id": 104402
		},
		{
			"name": "David's Sling",
			"id": 112401
		},
		{
			"name": "Crusader Armor",
			"id": 202408
		},
		{
			"name": "Veritas Lux Mea",
			"id": 205405
		}
	],
	"requirements": {
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"hpRegenRatio": 1.5,
		"increaseBasicAttackDamage": 8
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The last relic of one who fought to save those who have fallen, despite being betrayed, tortured, and crucified.",
	"apiMetaData": {
		"code": 205202,
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
