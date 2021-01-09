import Item from '../../types/Item';

export const MeteorClaymore: Item = {
	"id": 120404,
	"name": "MeteorClaymore",
	"buildsInto": [],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Flower": 1,
		"Playing Cards": 1,
		"Meteorite": 1
	},
	"stats": {
		"attackPower": 75,
		"cooldownReduction": 0.1,
		"criticalStrikeDamage": 0.3
	},
	"rarity": "Epic",
	"code": "유성검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The silver-grey colored metals found in Meteorsteel can be used to make a great sword with great strength. However, manufacturing it is no easy task.",
	"buildsFrom": [
		{
			"name": "Apricot Sword",
			"id": 120301
		},
		{
			"name": "Meteorite",
			"id": 401209
		}
	],
	"displayName": "Meteor Claymore",
	"apiMetaData": {
		"code": 120404,
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
