import Item from '../../types/Item';

export const Snare: Item = {
	"id": "Snare",
	"name": "Snare",
	"href": "/Snare",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Bamboo Trap",
			"id": "Bamboo Trap"
		},
		{
			"name": "Booby Trap",
			"id": "Booby Trap"
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 4
	},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Pond": 6,
		"Archery Range": 5,
		"Forest": 5,
		"Chapel": 5,
		"Beach": 5,
		"Dock": 6
	},
	"foundQuantity": 2,
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
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
