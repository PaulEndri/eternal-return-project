import Item from '../../types/Item';

export const WhitePowder: Item = {
	"id": 401206,
	"name": "WhitePowder",
	"buildsInto": [
		{
			"name": "Gentian Silver Gun",
			"id": 107402
		},
		{
			"name": "White Claw Punch",
			"id": 110411
		},
		{
			"name": "Ryukyu Tonfa",
			"id": 111401
		},
		{
			"name": "Flour Bomb",
			"id": 112301
		},
		{
			"name": "Flechette",
			"id": 113410
		},
		{
			"name": "Polaris",
			"id": 118406
		},
		{
			"name": "The Wall",
			"id": 121406
		},
		{
			"name": "C-4",
			"id": 502404
		}
	],
	"requirements": {
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "백색가루",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "Unidentifiable white powder. Probably from chalk...",
	"buildsFrom": [
		{
			"name": "Chalk",
			"id": 113104
		},
		{
			"name": "Stone",
			"id": 112101
		}
	],
	"displayName": "White Powder",
	"apiMetaData": {
		"code": 401206,
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
		}
	],
	"airSupply": true,
	"collectible": 0
}
