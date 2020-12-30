import Item from '../../types/Item';

export const LaserCrossbow: Item = {
	"id": 115302,
	"name": "Laser Crossbow",
	"buildsFrom": [
		{
			"name": "Crossbow",
			"id": 115101
		},
		{
			"name": "Laster Pointer",
			"id": 401108
		}
	],
	"buildsInto": [
		{
			"name": "Sniper Crossbow",
			"id": 115404
		}
	],
	"requirements": {
		"Short Crossbow": 1,
		"Bamboo": 1,
		"Laster Pointer": 1
	},
	"stats": {
		"attackPower": 30,
		"charges": 6,
		"sightRange": 2.5
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow specialized for sniping. As always, aim is important.",
	"apiMetaData": {
		"code": 115302,
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
