import Item from '../../types/Item';

export const Heelys: Item = {
	"id": 204204,
	"name": "Heelys",
	"buildsInto": [
		{
			"name": "Maverick Runner",
			"id": 204403
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
	"code": "힐리스",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "They look like regular shoes, but you can ride them like rollerblades because of the wheels mounted in the heels. That's just the way I roll.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 204102
		},
		{
			"name": "Scissors",
			"id": 112103
		}
	],
	"displayName": "Heelys",
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
