import Item from '../../types/Item';

export const HealingPotion: Item = {
	"id": "Healing Potion",
	"name": "Healing Potion",
	"href": "/Healing_Potion",
	"buildsFrom": [
		{
			"name": "Orchid",
			"id": "Orchid"
		},
		{
			"name": "Glass Bottle",
			"id": 112104
		}
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
