import Item from '../../types/Item';

export const ShortRod: Item = {
	"id": 108102,
	"name": "Short Rod",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Warhammer",
			"id": 104201
		},
		{
			"name": "Reaper's Scythe",
			"id": "Reaper's Scythe"
		},
		{
			"name": "Long Rod",
			"id": 108202
		},
		{
			"name": "Mai Sok",
			"id": 111403
		},
		{
			"name": "Feather Duster",
			"id": 205209
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 15
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 5,
		"Pond": 5,
		"Dock": 5
	},
	"foundQuantity": 1,
	"description": "Fine to carry and suitable for offense.",
	"apiMetaData": {
		"code": 108102,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
