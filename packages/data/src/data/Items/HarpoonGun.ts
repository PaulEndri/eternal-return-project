import Item from '../../types/Item';

export const HarpoonGun: Item = {
	"id": 118301,
	"name": "HarpoonGun",
	"buildsInto": [
		118403,
		118404
	],
	"requirements": {
		"Long Rifle": 1,
		"Laser Pointer": 1,
		"Short Spear": 1
	},
	"stats": {
		"attackPower": 64,
		"moveSpeed": -0.07,
		"sightRange": 2
	},
	"rarity": "Rare",
	"code": "하푼건",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A powerful gun that fires harpoons. Thar she blows!",
	"buildsFrom": [
		118201,
		107101
	],
	"displayName": "Harpoon Gun",
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
