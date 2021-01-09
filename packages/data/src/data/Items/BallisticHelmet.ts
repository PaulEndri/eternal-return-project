import Item from '../../types/Item';

export const BallisticHelmet: Item = {
	"id": 201301,
	"name": "BallisticHelmet",
	"buildsInto": [
		{
			"name": "Tactical OPS Helmet",
			"id": 201406
		}
	],
	"requirements": {
		"Hat": 1,
		"Scissors": 1,
		"Bike Helmet": 1
	},
	"stats": {
		"cooldownReduction": 0.08,
		"defense": 15,
		"maxHp": 90
	},
	"rarity": "Rare",
	"code": "방탄모",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Battered and tattered Ballistic Helmet. Initials marked inside the helmet scratched out and written over. Seems it's been passed around plenty of times.",
	"buildsFrom": [
		{
			"name": "Beret",
			"id": 201203
		},
		{
			"name": "Bike Helmet",
			"id": 201104
		}
	],
	"displayName": "Ballistic Helmet",
	"apiMetaData": {
		"code": 201301,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
