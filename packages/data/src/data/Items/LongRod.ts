import Item from '../../types/Item';

export const LongRod: Item = {
	"id": 108202,
	"name": "LongRod",
	"buildsInto": [
		{
			"name": "Goblin Bat",
			"id": 108301
		},
		{
			"name": "Umbrella",
			"id": 108401
		},
		{
			"name": "Monkey King Bar",
			"id": 108502
		}
	],
	"requirements": {
		"Short Rod": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 25
	},
	"rarity": "Uncommon",
	"code": "장봉",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can keep more distance than when using a short rod, but you still have to be careful.",
	"buildsFrom": [
		{
			"name": "Short Rod",
			"id": 108102
		},
		{
			"name": "Bamboo",
			"id": 108103
		}
	],
	"displayName": "Long Rod",
	"apiMetaData": {
		"code": 108202,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
