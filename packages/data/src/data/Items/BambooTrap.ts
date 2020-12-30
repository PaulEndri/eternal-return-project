import Item from '../../types/Item';

export const BambooTrap: Item = {
	"id": "Bamboo Trap",
	"name": "Bamboo Trap",
	"href": "/Bamboo_Trap",
	"buildsFrom": [
		{
			"name": "Snare",
			"id": "Snare"
		},
		{
			"name": "Bamboo",
			"id": 108103
		}
	],
	"buildsInto": [
		{
			"name": "Pendulum Axe",
			"id": "Pendulum Axe"
		}
	],
	"requirements": {
		"Snare": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
