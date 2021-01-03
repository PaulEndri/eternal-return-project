import Item from '../../types/Item';

export const JungleGuillotine: Item = {
	"id": 502303,
	"name": "JungleGuillotine",
	"buildsFrom": [
		{
			"name": "Mousetrap",
			"id": 502103
		},
		{
			"name": "Kitchen Knife",
			"id": 101104
		}
	],
	"buildsInto": [
		{
			"name": "Double Guillotine",
			"id": 502405
		},
		{
			"name": "Hidden Maiden",
			"id": 502407
		}
	],
	"requirements": {
		"Mousetrap": 1,
		"Kitchen Knife": 1
	},
	"stats": {
		"attackPower": "#REF!"
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"displayName": "Jungle Guillotine",
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"apiMetaData": {
		"code": 502303,
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
