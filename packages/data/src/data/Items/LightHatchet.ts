import Item from '../../types/Item';

export const LightHatchet: Item = {
	"id": 105301,
	"name": "LightHatchet",
	"buildsFrom": [
		{
			"name": "Battle Axe",
			"id": 105202
		},
		{
			"name": "Feather",
			"id": 205101
		}
	],
	"buildsInto": [
		{
			"name": "Parashu",
			"id": 105405
		}
	],
	"requirements": {
		"Hatchet": 1,
		"Bamboo": 1,
		"Feather": 1
	},
	"stats": {
		"attackPower": 61,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "경량화도끼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Light Hatchet",
	"apiMetaData": {
		"code": 105301,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
