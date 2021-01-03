import Item from '../../types/Item';

export const Failnaught: Item = {
	"id": 114502,
	"name": "Failnaught",
	"buildsFrom": [
		{
			"name": "VF Blood Sample",
			"id": 401401
		},
		{
			"name": "Strong Bow",
			"id": 114301
		}
	],
	"buildsInto": [],
	"requirements": {
		"VF Blood Sample": 1,
		"Branch": 1,
		"Piano Wire": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 100,
		"attackSpeedRatio": 0.15,
		"lifeSteal": 0.15
	},
	"rarity": "Legend",
	"code": "페일노트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The arrows of Tristan, one of the Knights of the Round Table. Known as the arrows that never miss, so it will fail you not.",
	"displayName": "Failnaught",
	"apiMetaData": {
		"code": 114502,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
