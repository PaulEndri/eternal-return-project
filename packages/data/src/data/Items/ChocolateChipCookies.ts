import Item from '../../types/Item';

export const ChocolateChipCookies: Item = {
	"id": "Chocolate Chip Cookies",
	"name": "Chocolate Chip Cookies",
	"href": "/Chocolate_Chip_Cookies",
	"buildsFrom": [
		{
			"name": "Chocolate",
			"id": "Chocolate"
		},
		{
			"name": "Butter",
			"id": "Butter"
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
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
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
