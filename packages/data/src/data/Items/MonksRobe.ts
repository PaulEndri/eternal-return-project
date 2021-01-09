import Item from '../../types/Item';

export const MonksRobe: Item = {
	"id": 202103,
	"name": "MonksRobe",
	"buildsInto": [
		{
			"name": "Turtle Dobok",
			"id": 202203
		},
		{
			"name": "Patched Robe",
			"id": 202206
		},
		{
			"name": "Buddha Sarira",
			"id": 205207
		}
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.05,
		"defense": 5
	},
	"rarity": "Common",
	"code": "승복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 9,
		"Archery Range": 5
	},
	"foundQuantity": 1,
	"description": "Clothing for monks. The arm of each side is divided into four parts, representing Manjushri, Samantabhadra, Guanyin, and Ksitigarbha",
	"buildsFrom": [],
	"displayName": "Monk's Robe",
	"apiMetaData": {
		"code": 202103,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
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
