import Item from '../../types/Item';

export const Lemonade: Item = {
	"id": 301202,
	"name": "Lemonade",
	"buildsFrom": [
		301107,
		302105
	],
	"buildsInto": [],
	"requirements": {
		"Carbonated Water": 1,
		"Lemon": 1
	},
	"stats": {
		"spRestore": 300
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 4,
	"displayName": "Lemonade",
	"clientMetaData": {
		"type": "Beverage",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 301202,
		"type": "Beverage",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
