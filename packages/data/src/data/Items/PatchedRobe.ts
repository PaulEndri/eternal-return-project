import Item from '../../types/Item';

export const PatchedRobe: Item = {
	"id": 202206,
	"name": "PatchedRobe",
	"buildsInto": [
		202306,
		202417
	],
	"requirements": {
		"Monk's Robe": 1,
		"Bandage": 1
	},
	"stats": {
		"defense": 5,
		"hpRegen": 1,
		"lifeSteal": 0.07
	},
	"rarity": "Uncommon",
	"code": "덧댄로브",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made by patching together various robes. Might be more reliable than a regular robe.",
	"buildsFrom": [
		202103,
		203102
	],
	"displayName": "Patched Robe",
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
