import Item from '../../types/Item';

export const ThrowingStars: Item = {
	"id": 113205,
	"name": "ThrowingStars",
	"buildsInto": [
		{
			"name": "Chakram",
			"id": 113301
		},
		{
			"name": "Sudarsana",
			"id": 113501
		}
	],
	"requirements": {
		"Razor": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 27,
		"charges": 50
	},
	"rarity": "Uncommon",
	"code": "표창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's convenient, but be careful when using it. It doesn't come back to you like a boomerang.",
	"buildsFrom": [
		{
			"name": "Razor",
			"id": 113101
		},
		{
			"name": "Piano Wire",
			"id": 502104
		}
	],
	"displayName": "Throwing Stars",
	"apiMetaData": {
		"code": 113205,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
