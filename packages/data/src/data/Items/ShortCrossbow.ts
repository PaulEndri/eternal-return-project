import Item from '../../types/Item';

export const ShortCrossbow: Item = {
	"id": 115202,
	"name": "ShortCrossbow",
	"buildsInto": [
		{
			"name": "Long Crossbow",
			"id": 115201
		},
		{
			"name": "Crossbow",
			"id": 115202
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 12
	},
	"rarity": "Common",
	"code": "크로스보우",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Factory": 4,
		"Forest": 4
	},
	"foundQuantity": 1,
	"description": "This is a mechanical bow, so take aim and shoot at will.",
	"buildsFrom": [],
	"displayName": "Short Crossbow",
	"apiMetaData": {
		"code": 115202,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
