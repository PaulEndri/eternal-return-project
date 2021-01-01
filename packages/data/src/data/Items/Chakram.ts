import Item from '../../types/Item';

export const Chakram: Item = {
	"id": 113301,
	"name": "Chakram",
	"buildsFrom": [
		{
			"name": "Throwing Stars",
			"id": 113205
		},
		{
			"name": "Stallion Medal",
			"id": 401109
		}
	],
	"buildsInto": [
		{
			"name": "Dharma Chakram",
			"id": 113403
		}
	],
	"requirements": {
		"Razor": 1,
		"Piano Wire": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 38,
		"charges": 50
	},
	"rarity": "Rare",
	"code": "챠크람",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The chakram is basically a throwing weapon, but in some cases, it also can be used to slash enemies like a melee weapon. Its circular shape has sharp blades around it, making it even more deadly.",
	"displayName": "Chakram",
	"apiMetaData": {
		"code": 113301,
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
