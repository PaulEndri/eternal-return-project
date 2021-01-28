import Item from '../../types/Item';

export const DoubleRevolverSP: Item = {
	"id": 116401,
	"name": "DoubleRevolverSP",
	"buildsInto": [
		116403
	],
	"requirements": {
		"Walther PPK": 2,
		"Oil": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 40,
		"attackSpeedRatio": 0.1,
		"charges": 30,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "더블리볼버SP",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "This isn't two revolvers -- it's one double revolver.",
	"buildsFrom": [
		116201,
		116202
	],
	"displayName": "Double Revolver SP",
	"apiMetaData": {
		"code": 116401,
		"category": "Weapon",
		"type": "Pistol"
	},
	"clientMetaData": {
		"type": "Pistol",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
