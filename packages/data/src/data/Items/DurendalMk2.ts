import Item from '../../types/Item';

export const DurendalMk2: Item = {
	"id": 120401,
	"name": "Durendal Mk2",
	"buildsFrom": [
		{
			"name": "Apricot Sword",
			"id": 120301
		},
		{
			"name": "Laster Pointer",
			"id": 401108
		}
	],
	"buildsInto": [],
	"requirements": {
		"Needle": 1,
		"Iron Ore": 1,
		"Flower": 1,
		"Playing Cards": 1,
		"Laster Pointer": 1
	},
	"stats": {
		"attackPower": 51,
		"cooldownReduction": 0.1,
		"criticalStrikeChance": 0.1,
		"criticalStrikeDamage": 0.25,
		"sightRange": 3
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"apiMetaData": {
		"code": 120401,
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
