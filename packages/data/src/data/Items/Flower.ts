import Item from '../../types/Item';

export const Flower: Item = {
	"id": 205102,
	"name": "Flower",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Rose Knife",
			"id": 101301
		},
		{
			"name": "Apricot Flower Tag",
			"id": 113302
		},
		{
			"name": "Hanbok",
			"id": 202306
		},
		{
			"name": "Flower of Fate",
			"id": 205203
		},
		{
			"name": "Flower Liquor",
			"id": 301303
		},
		{
			"name": "Orchid",
			"id": 302218
		}
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.07
	},
	"rarity": "Common",
	"code": "꽃",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 7,
		"Cemetery": 7,
		"Forest": 7,
		"Uptown": 7
	},
	"foundQuantity": 1,
	"description": "Roses are red, violets are blue, this flower makes good items, try crafting them too.",
	"displayName": "Flower",
	"apiMetaData": {
		"code": 205102,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
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
