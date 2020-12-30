import Item from '../../types/Item';

export const JungleGuillotine: Item = {
	"id": "Jungle Guillotine",
	"name": "Jungle Guillotine",
	"href": "/Jungle_Guillotine",
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
			"id": "Double Guillotine"
		},
		{
			"name": "Hidden Maiden",
			"id": "Hidden Maiden"
		}
	],
	"requirements": {
		"Mousetrap": 1,
		"Kitchen Knife": 1
	},
	"stats": {
		"attackPower": 6
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
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
