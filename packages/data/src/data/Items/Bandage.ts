import Item from '../../types/Item';

export const Bandage: Item = {
	"id": 203102,
	"name": "Bandage",
	"buildsInto": [
		{
			"name": "Patched Robe",
			"id": 202206
		},
		{
			"name": "Squad Leader Armband",
			"id": 203202
		},
		{
			"name": "Bracer",
			"id": 203203
		},
		{
			"name": "First Aid Kit",
			"id": 302324
		},
		{
			"name": "Oilcloth",
			"id": 401202
		}
	],
	"requirements": {},
	"stats": {
		"hpRegen": 0.8
	},
	"rarity": "Common",
	"code": "붕대",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Hospital": 6,
		"School": 6,
		"Factory": 6,
		"Dock": 7
	},
	"foundQuantity": 1,
	"description": "A patch that's pretty stretchy. It's good for covering injuries.",
	"buildsFrom": [],
	"displayName": "Bandage",
	"apiMetaData": {
		"code": 203102,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
