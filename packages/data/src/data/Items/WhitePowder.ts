import Item from '../../types/Item';

export const WhitePowder: Item = {
	"id": 401206,
	"name": "White Powder",
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
			"id": "Flechette"
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
			"id": "C-4"
		}
	],
	"requirements": {
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "Unidentifiable white powder. Probably from chalk...",
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
