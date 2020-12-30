import Item from '../../types/Item';

export const KneePads: Item = {
	"id": 204201,
	"name": "Knee Pads",
	"buildsFrom": [
		{
			"name": "Tights",
			"id": 204103
		},
		{
			"name": "Leather",
			"id": 401103
		}
	],
	"buildsInto": [
		{
			"name": "Steel Knee Pads",
			"id": 204401
		}
	],
	"requirements": {
		"Tights": 1,
		"Leather": 1
	},
	"stats": {
		"defense": 8,
		"moveSpeed": 0.16
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Learning to ride a bike? Put these on.",
	"apiMetaData": {
		"code": 204201,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
