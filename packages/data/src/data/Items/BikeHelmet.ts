import Item from '../../types/Item';

export const BikeHelmet: Item = {
	"id": 201104,
	"name": "BikeHelmet",
	"buildsInto": [
		201205,
		201301
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.02,
		"maxHp": 90
	},
	"rarity": "Common",
	"code": "자전거헬멧",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"School": 6,
		"Chapel": 6,
		"Beach": 6
	},
	"foundQuantity": 1,
	"description": "A shabby and cheap looking helmet for when you take your bike for a spin.",
	"buildsFrom": [],
	"displayName": "Bike Helmet",
	"apiMetaData": {
		"code": 201104,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
