import Item from '../../types/Item';

export const Flower: Item = {
	"id": 205102,
	"name": "Flower",
	"buildsInto": [
		101301,
		113302,
		202306,
		205203,
		301303,
		302218
	],
	"requirements": {},
	"stats": {
		"lifeSteal": 0.07
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
	"buildsFrom": [],
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
		3
	],
	"airSupply": false,
	"collectible": 0
}
