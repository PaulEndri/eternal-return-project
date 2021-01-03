import Item from '../../types/Item';

export const Dioscuri: Item = {
	"id": 103501,
	"name": "Dioscuri",
	"buildsFrom": [
		{
			"name": "Twin Swords",
			"id": 103201
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Rusty Sword": 1,
		"Battery": 1,
		"Water": 1,
		"Carbonated Water": 1
	},
	"stats": {
		"attackPower": 40,
		"attackSpeedRatio": 0.5
	},
	"rarity": "Epic",
	"code": "디오스쿠로이",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Named after the Greek mythological twin brothers, Castor and Pollux. Twins but with different dads!",
	"displayName": "Dioscuri",
	"apiMetaData": {
		"code": 103501,
		"category": "Weapon",
		"type": "DualSword"
	},
	"clientMetaData": {
		"type": "Dual Swords",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
