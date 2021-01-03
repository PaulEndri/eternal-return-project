import Item from '../../types/Item';

export const ChocolateChipCookies: Item = {
	"id": 302311,
	"name": "ChocolateChipCookies",
	"buildsFrom": [
		{
			"name": "Chocolate",
			"id": 302119
		},
		{
			"name": "Butter",
			"id": 302206
		}
	],
	"buildsInto": [],
	"requirements": {
		"Chocolate": 1,
		"Milk": 1,
		"Branch": 1
	},
	"stats": {
		"heal": 733
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "A timeless classic, the chocolate chip cookie is the king of snacks.",
	"displayName": "Chocolate Chip Cookies",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302311,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
