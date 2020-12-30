import Item from '../../types/Item';

export const Rapier: Item = {
	"id": 120201,
	"name": "Rapier",
	"buildsFrom": [
		{
			"name": "Needle",
			"id": 120101
		},
		{
			"name": "Iron Ore",
			"id": 401118
		}
	],
	"buildsInto": [
		{
			"name": "Apricot Sword",
			"id": 120301
		},
		{
			"name": "Sword of Justice",
			"id": 120302
		},
		{
			"name": "Joyeuse",
			"id": 120405
		}
	],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 16,
		"criticalStrikeDamage": 0.25
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A one-handed sword for personal combat with a long, thin blade ideal for stabbing. Used mostly in the 16th and 17th centuries.",
	"apiMetaData": {
		"code": 120201,
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
