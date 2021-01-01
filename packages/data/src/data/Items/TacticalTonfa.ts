import Item from '../../types/Item';

export const TacticalTonfa: Item = {
	"id": 111402,
	"name": "TacticalTonfa",
	"buildsFrom": [
		{
			"name": "Police Baton",
			"id": 111301
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"buildsInto": [],
	"requirements": {
		"Bamboo": 1,
		"Branch": 1,
		"Stallion Medal": 1,
		"Fountain Pen": 1,
		"Paper": 1
	},
	"stats": {
		"attackPower": 70,
		"defense": 10,
		"lifeSteal": 0.25
	},
	"rarity": "Epic",
	"code": "택티컬톤파",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Tactical Tonfa",
	"apiMetaData": {
		"code": 111402,
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
