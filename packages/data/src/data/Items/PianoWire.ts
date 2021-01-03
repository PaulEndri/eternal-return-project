import Item from '../../types/Item';

export const PianoWire: Item = {
	"id": 502104,
	"name": "PianoWire",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Throwing Stars",
			"id": 113205
		},
		{
			"name": "Wooden Bow",
			"id": 114201
		},
		{
			"name": "Long Crossbow",
			"id": 115201
		},
		{
			"name": "AK-47",
			"id": 117301
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		},
		{
			"name": "Dynamite",
			"id": 502203
		},
		{
			"name": "Mithril String",
			"id": 502401
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Common",
	"code": "피아노선",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Hotel": 7,
		"Chapel": 6,
		"Beach": 6,
		"Uptown": 7
	},
	"foundQuantity": 1,
	"displayName": "Piano Wire",
	"apiMetaData": {
		"code": 502104,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
