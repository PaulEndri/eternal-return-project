import Item from '../../types/Item';

export const KneePads: Item = {
	"id": 204201,
	"name": "KneePads",
	"buildsInto": [
		204401
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
	"code": "무릎보호대",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Learning to ride a bike? Put these on.",
	"buildsFrom": [
		204103,
		401103
	],
	"displayName": "Knee Pads",
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
