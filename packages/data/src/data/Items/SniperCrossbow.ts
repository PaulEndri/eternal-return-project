import Item from '../../types/Item';

export const SniperCrossbow: Item = {
	"id": 115404,
	"name": "Sniper Crossbow",
	"buildsFrom": [
		{
			"name": "Laser Crossbow",
			"id": 115302
		},
		{
			"name": "Sniping Scope",
			"id": "Sniping Scope"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Crossbow": 1,
		"Bamboo": 1,
		"Laster Pointer": 2,
		"Binoculars": 1
	},
	"stats": {
		"attackPower": 85,
		"attackRange": 1.2,
		"charges": 7,
		"sightRange": 5
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A new type of bow with remarkably high accuracy. It's equipped with a laser sight, similar to modern sniper rifles.",
	"apiMetaData": {
		"code": 115404,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
