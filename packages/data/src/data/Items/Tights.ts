import Item from '../../types/Item';

export const Tights: Item = {
	"id": 204103,
	"name": "Tights",
	"buildsInto": [
		204201,
		204202
	],
	"requirements": {},
	"stats": {
		"defense": 5,
		"moveSpeed": 0.04
	},
	"rarity": "Common",
	"code": "타이즈",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 8,
		"Hospital": 6,
		"Forest": 7
	},
	"foundQuantity": 1,
	"description": "It's thin and tight. You can wear them on your legs or over your head if you're going to rob a bank.",
	"buildsFrom": [],
	"displayName": "Tights",
	"apiMetaData": {
		"code": 204103,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
