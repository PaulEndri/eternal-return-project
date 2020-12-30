import Item from '../../types/Item';

export const Heelys: Item = {
	"id": 204204,
	"name": "Heelys",
	"buildsFrom": [
		{
			"name": "Running Shoes",
			"id": 204102
		},
		{
			"name": "Iron Ball",
			"id": 112103
		}
	],
	"buildsInto": [
		{
			"name": "Maverick Runner",
			"id": 204404
		},
		{
			"name": "Boots of Hermes",
			"id": 204501
		}
	],
	"requirements": {
		"Running Shoes": 1,
		"Iron Ball": 1
	},
	"stats": {
		"moveSpeed": 0.12,
		"moveSpeedOutOfCombat": 0.2
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "They look like regular shoes, but you can ride them like rollerblades because of the wheels mounted in the heels. That's just the way I roll.",
	"apiMetaData": {
		"code": 204204,
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
