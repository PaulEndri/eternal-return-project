import Item from '../../types/Item';

export const DoubleRevolverSP: Item = {
	"id": 116401,
	"name": "Double Revolver SP",
	"buildsFrom": [
		{
			"name": "Magnum-Python",
			"id": 116201
		},
		{
			"name": "Beretta M92F",
			"id": 116202
		}
	],
	"buildsInto": [
		{
			"name": "Devil's Marksman",
			"id": 116403
		}
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "This isn't two revolvers -- it's one double revolver.",
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
