import Item from '../../types/Item';

export const Excalibur: Item = {
	"id": 102407,
	"name": "Excalibur",
	"buildsFrom": [
		{
			"name": "Jewel Sword",
			"id": 102404
		},
		{
			"name": "Holy Grail",
			"id": 205108
		}
	],
	"buildsInto": [],
	"requirements": {
		"Rusty Sword": 1,
		"Lighter": 1,
		"Hammer": 1,
		"Gemstone": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 60,
		"hpRegenRatio": 2,
		"maxHp": 400
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A noted sword produced in Avalon, the nation of fairies. King  Arthur received this sword from the beautiful Lady of the Lake and returned it after the final battle against Prince Mordred.",
	"apiMetaData": {
		"code": 102407,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
