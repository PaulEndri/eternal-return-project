import Item from '../../types/Item';

export const LongRifle: Item = {
	"id": 118101,
	"name": "LongRifle",
	"buildsInto": [
		118201
	],
	"requirements": {},
	"stats": {
		"attackPower": 34,
		"charges": 1
	},
	"rarity": "Common",
	"code": "화승총",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Forest": 2,
		"Dock": 3
	},
	"foundQuantity": 1,
	"description": "An old type of gun that isn't frequently used these days. Requires lighting a fuse to shoot.",
	"buildsFrom": [],
	"displayName": "Long Rifle",
	"apiMetaData": {
		"code": 118101,
		"category": "Weapon",
		"type": "SniperRifle"
	},
	"clientMetaData": {
		"type": "SniperRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
