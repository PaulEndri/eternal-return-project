import Item from '../../types/Item';

export const PowderofLife: Item = {
	"id": 205301,
	"name": "Powder of Life",
	"buildsFrom": [
		{
			"name": "Tree of Life",
			"id": 401208
		},
		{
			"name": "Stone",
			"id": 112101
		}
	],
	"buildsInto": [
		{
			"name": "Glacial Ice",
			"id": 205402
		},
		{
			"name": "True Samadhi Fire",
			"id": 205403
		},
		{
			"name": "Force Core",
			"id": 401403
		}
	],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1
	},
	"stats": {
		"hpRegen": 1.5,
		"spRegen": 1.5
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A powder that summons the spirits. Better combined with other items to make something mystical.",
	"apiMetaData": {
		"code": 205301,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "Bear",
			"id": 6
		},
		{
			"name": "Wickline",
			"id": 7
		}
	],
	"airSupply": false,
	"collectible": 0
}
