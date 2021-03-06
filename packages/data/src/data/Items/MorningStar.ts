import Item from '../../types/Item';

export const MorningStar: Item = {
	"id": 104301,
	"name": "MorningStar",
	"buildsInto": [
		104401,
		104404
	],
	"requirements": {
		"Hammer": 1,
		"Short Rod": 1,
		"Iron Ball": 1
	},
	"stats": {
		"attackPower": 55
	},
	"rarity": "Rare",
	"code": "모닝스타",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A blunt weapon you use with both hands. It was used by infantry against knights on horseback. The head of the weapon can be changed according to the user's style.",
	"buildsFrom": [
		104201,
		112103
	],
	"displayName": "Morning Star",
	"apiMetaData": {
		"code": 104301,
		"category": "Weapon",
		"type": "Hammer"
	},
	"clientMetaData": {
		"type": "Hammer",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
