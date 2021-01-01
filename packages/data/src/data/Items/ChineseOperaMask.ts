import Item from '../../types/Item';

export const ChineseOperaMask: Item = {
	"id": 201411,
	"name": "ChineseOperaMask",
	"buildsFrom": [
		{
			"name": "Mask",
			"id": 201201
		},
		{
			"name": "VF Blood Sample",
			"id": 401401
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hairband": 1,
		"Feather": 1,
		"VF Blood Sample": 1
	},
	"stats": {
		"defense": 16,
		"lifeSteal": 0.22,
		"maxSp": 300,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.4
	},
	"rarity": "Epic",
	"code": "변검",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Chinese Opera Mask",
	"apiMetaData": {
		"code": 201411,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
