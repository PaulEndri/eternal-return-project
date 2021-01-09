import Item from '../../types/Item';

export const Moonstone: Item = {
	"id": 401301,
	"name": "Moonstone",
	"buildsInto": [
		{
			"name": "Starsteel Twin Swords",
			"id": 103402
		},
		{
			"name": "Evening Star",
			"id": 104404
		},
		{
			"name": "Cosmic Bident",
			"id": 107404
		},
		{
			"name": "The Deadly Ray",
			"id": 118501
		},
		{
			"name": "Cube Watch",
			"id": 203408
		},
		{
			"name": "Moonlight Pendant",
			"id": 205401
		}
	],
	"requirements": {
		"Meteorite": 1,
		"Stone": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "문스톤",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"buildsFrom": [
		{
			"name": "Meteorite",
			"id": 401209
		},
		{
			"name": "Stone",
			"id": 112101
		}
	],
	"displayName": "Moonstone",
	"apiMetaData": {
		"code": 401301,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		},
		{
			"name": "Wickline",
			"id": 7
		}
	],
	"airSupply": true,
	"collectible": 0
}
