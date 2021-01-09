import Item from '../../types/Item';

export const MagnumPython: Item = {
	"id": 116201,
	"name": "MagnumPython",
	"buildsInto": [
		{
			"name": "Double Revolver SP",
			"id": 116401
		},
		{
			"name": "Magnum-Anaconda",
			"id": 116402
		}
	],
	"requirements": {
		"Walther PPK": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 15,
		"attackSpeedRatio": 0.1,
		"charges": 10,
		"moveSpeed": 0.1
	},
	"rarity": "Uncommon",
	"code": "매그넘-파이선",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If you research revolvers that use Magnum cartridges, you'll find that some of them use scientific names for snakes. This one is the  Pythonidae, also known as Python.",
	"buildsFrom": [
		{
			"name": "Walther PPK",
			"id": 116101
		},
		{
			"name": "Oil",
			"id": 401112
		}
	],
	"displayName": "Magnum-Python",
	"apiMetaData": {
		"code": 116201,
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
