import Item from '../../types/Item';

export const CloseHelm: Item = {
	"id": 201402,
	"name": "CloseHelm",
	"buildsInto": [
		201407,
		201410
	],
	"requirements": {
		"Hat": 1,
		"Steel Chain": 1,
		"Hairband": 1,
		"Feather": 1
	},
	"stats": {
		"cooldownReduction": 0.07,
		"defense": 20,
		"lifeSteal": 0.1,
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
		201204,
		201201
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
