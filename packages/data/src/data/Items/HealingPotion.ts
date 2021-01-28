import Item from '../../types/Item';

export const HealingPotion: Item = {
	"id": 302317,
	"name": "HealingPotion",
	"buildsFrom": [
		302218,
		112104
	],
	"buildsInto": [],
	"requirements": {
		"Oriental Herb": 1,
		"Flower": 1,
		"Glass Bottle": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 2,
	"description": "Also known as modern medicine.",
	"displayName": "Healing Potion",
	"clientMetaData": {
		"type": "Food",
		"category": "Consume"
	},
	"apiMetaData": {
		"code": 302317,
		"type": "Food",
		"category": "Consume"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
