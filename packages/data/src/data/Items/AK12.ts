import Item from '../../types/Item';

export const AK12: Item = {
	"id": 117404,
	"name": "AK12",
	"buildsInto": [],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1,
		"Piano Wire": 1,
		"Glass Bottle": 1,
		"Stone": 1,
		"Glue": 1
	},
	"stats": {
		"attackPower": 94,
		"charges": 1,
		"criticalStrikeChance": 0.2,
		"sightRange": 1.5
	},
	"rarity": "Epic",
	"code": "AK-12",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "AK-47",
			"id": 117301
		},
		{
			"name": "Glass Panel",
			"id": 401305
		}
	],
	"displayName": "AK-12",
	"apiMetaData": {
		"code": 117404,
		"category": "Weapon",
		"type": "AssaultRifle"
	},
	"clientMetaData": {
		"type": "AssaultRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
