import Item from '../../types/Item';

export const Torch: Item = {
	"id": 108402,
	"name": "Torch",
	"buildsFrom": [
		{
			"name": "Feather Duster",
			"id": 205209
		},
		{
			"name": "Oilcloth",
			"id": 401202
		}
	],
	"buildsInto": [
		{
			"name": "Statue of Soteria",
			"id": 108403
		}
	],
	"requirements": {
		"Short Rod": 1,
		"Feather": 1,
		"Oil": 1,
		"Bandage": 1
	},
	"stats": {
		"attackPower": 40,
		"attackSpeedRatio": 0.1,
		"hpRegen": 0.5,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "횃불",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The torch that lights your way might help you keep your own life from being extinguished. If you see an enemy, don't hesitate to swing.",
	"displayName": "Torch",
	"apiMetaData": {
		"code": 108402,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
