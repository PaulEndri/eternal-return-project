import Item from '../../types/Item';

export const PatchedRobe: Item = {
	"id": 202206,
	"name": "Patched Robe",
	"buildsFrom": [
		{
			"name": "Monk's Robe",
			"id": "Monk's Robe"
		},
		{
			"name": "Bandage",
			"id": 203102
		}
	],
	"buildsInto": [
		{
			"name": "Hanbok",
			"id": 202306
		},
		{
			"name": "EOD Suit",
			"id": "EOD Suit"
		}
	],
	"requirements": {
		"Monk's Robe": 1,
		"Bandage": 1
	},
	"stats": {
		"cooldownReduction": 0.07,
		"defense": 5,
		"hpRegen": 1
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made by patching together various robes. Might be more reliable than a regular robe.",
	"apiMetaData": {
		"code": 202206,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
