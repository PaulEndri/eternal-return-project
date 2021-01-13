import Item from '../../types/Item';

export const CloseHelm: Item = {
	"id": 201402,
	"name": "CloseHelm",
	"buildsInto": [
		{
			"name": "Helm of Banneret",
			"id": 201407
		},
		{
			"name": "Imperial Burgonet",
			"id": 201410
		}
	],
	"requirements": {
		"Hat": 1,
		"Steel Chain": 1,
		"Hairband": 1,
		"Feather": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 20,
		"maxSp": 130,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"code": "투구",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A helmet made out of steel to protect the head of its wearer. It's heavy, but it makes you feel safe.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 201204
		},
		{
			"name": "Scissors",
			"id": 201201
		}
	],
	"displayName": "Close Helm",
	"apiMetaData": {
		"code": 201402,
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
