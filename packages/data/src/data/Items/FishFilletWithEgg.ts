import Item from '../../types/Item';

export const FishFilletWithEgg: Item = {
	"id": "Fish Fillet With Egg",
	"name": "Fish Fillet With Egg",
	"href": "/Fish_Fillet_With_Egg",
	"buildsFrom": [
		{
			"name": "Cod",
			"id": "Cod"
		},
		{
			"name": "Egg",
			"id": "Egg"
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cod": 1,
		"Egg": 1
	},
	"stats": {
		"heal": 700
	},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 1,
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
