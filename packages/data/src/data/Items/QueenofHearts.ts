import Item from '../../types/Item';

export const QueenOfHearts: Item = {
	"id": 202502,
	"name": "QueenOfHearts",
	"buildsFrom": [
		{
			"name": "VF Blood Sample",
			"id": 401401
		},
		{
			"name": "Hanbok",
			"id": 202306
		}
	],
	"buildsInto": [],
	"requirements": {
		"VF Blood Sample": 1,
		"Monk's Robe": 1,
		"Bandage": 1,
		"Flower": 1
	},
	"stats": {
		"cooldownReduction": 0.25,
		"defense": 45,
		"hpRegen": 3
	},
	"rarity": "Legend",
	"code": "퀸오브하트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A magical cloak that only a true queen can wear. The magic from the cloak protected the Queen, but its power hasn't been used for a while...",
	"displayName": "Queen of Hearts",
	"apiMetaData": {
		"code": 202502,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}