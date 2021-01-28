import Item from '../../types/Item';

export const FrenchFries: Item = {
	"id": 302302,
	"name": "FrenchFries",
	"buildsFrom": [
		302102,
		401203
	],
	"buildsInto": [
		302401
	],
	"requirements": {
		"Potato": 1,
		"Oil": 1,
		"Lighter": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
	"description": "This is undoubtedly the ultimate form of potato. Don't deny it.",
	"displayName": "French Fries",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302302,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
