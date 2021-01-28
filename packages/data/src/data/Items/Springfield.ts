import Item from '../../types/Item';

export const Springfield: Item = {
	"id": 118201,
	"name": "Springfield",
	"buildsInto": [
		118301,
		118401,
		118402
	],
	"requirements": {
		"Long Rifle": 1,
		"Laser Pointer": 1
	},
	"stats": {
		"attackPower": 50,
		"moveSpeed": -0.07,
		"sightRange": 1.5
	},
	"rarity": "Uncommon",
	"code": "스프링필드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		118101,
		401108
	],
	"displayName": "Springfield",
	"apiMetaData": {
		"code": 118201,
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
