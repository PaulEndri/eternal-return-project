import Item from '../../types/Item';

export const MonksRobe: Item = {
	"id": "Monk's Robe",
	"name": "Monk's Robe",
	"href": "/Monk's_Robe",
	"buildsFrom": [],
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 9,
		"Archery Range": 5
	},
	"foundQuantity": 1,
	"description": "Clothing for monks. The arm of each side is divided into four parts, representing Manjushri, Samantabhadra, Guanyin, and Ksitigarbha",
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
