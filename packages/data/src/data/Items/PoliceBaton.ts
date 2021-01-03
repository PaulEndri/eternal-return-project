import Item from '../../types/Item';

export const PoliceBaton: Item = {
	"id": 111301,
	"name": "PoliceBaton",
	"buildsFrom": [
		{
			"name": "Tonfa",
			"id": 111201
		},
		{
			"name": "Stallion Medal",
			"id": 401109
		}
	],
	"buildsInto": [
		{
			"name": "Tactical Tonfa",
			"id": 111402
		}
	],
	"requirements": {
		"Bamboo": 1,
		"Branch": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 35,
		"defense": 8
	},
	"rarity": "Rare",
	"code": "경찰봉",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Police Baton",
	"apiMetaData": {
		"code": 111301,
		"category": "Weapon",
		"type": "Tonfa"
	},
	"clientMetaData": {
		"type": "Tonfa",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
