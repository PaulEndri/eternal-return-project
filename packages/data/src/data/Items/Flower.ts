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
			"id": "Flower Liquor"
		},
		{
			"name": "Orchid",
			"id": "Orchid"
		}
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.09
	},
	"rarity": "Common",
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
