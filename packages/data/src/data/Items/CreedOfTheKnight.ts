import Item from '../../types/Item';

export const CreedOfTheKnight: Item = {
	"id": 203406,
	"name": "CreedOfTheKnight",
	"buildsInto": [],
	"requirements": {
		"Turtle Shell": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Bandage": 1,
		"Needle": 1
	},
	"stats": {
		"attackPower": 30,
		"criticalStrikeDamage": 0.2,
		"defense": 25,
		"hpRegen": 1.5,
		"moveSpeed": -0.1
	},
	"rarity": "Epic",
	"code": "기사의신조",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Shielding is not just a skill that must be mastered by a knight, but also symbolizes a knight's creed to protect the weak.",
	"buildsFrom": [
		{
			"name": "Steel Shield",
			"id": 203401
		},
		{
			"name": "Squad Leader Armband",
			"id": 203202
		}
	],
	"displayName": "Creed of the Knight",
	"apiMetaData": {
		"code": 203406,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
