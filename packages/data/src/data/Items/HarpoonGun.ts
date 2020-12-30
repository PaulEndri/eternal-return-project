import Item from '../../types/Item';

export const HarpoonGun: Item = {
	"id": 118301,
	"name": "Harpoon Gun",
	"buildsFrom": [
		{
			"name": "Springfield",
			"id": 118201
		},
		{
			"name": "Short Spear",
			"id": 107101
		}
	],
	"buildsInto": [
		{
			"name": "Tac-50",
			"id": 118403
		},
		{
			"name": "Intervention",
			"id": 118404
		}
	],
	"requirements": {
		"Long Rifle": 1,
		"Laster Pointer": 1,
		"Short Spear": 1
	},
	"stats": {
		"attackPower": 64,
		"moveSpeed": -0.1,
		"sightRange": 2
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A powerful gun that fires harpoons. Thar she blows!",
	"apiMetaData": {
		"code": 118301,
		"category": "Weapon",
		"type": "SniperRifle"
	},
	"clientMetaData": {
		"type": "SniperRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
