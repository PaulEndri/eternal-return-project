import Item from '../../types/Item';

export const LongRod: Item = {
	"id": 108202,
	"name": "LongRod",
	"buildsInto": [
		108301,
		108401,
		108502
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
		108102,
		108103
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
