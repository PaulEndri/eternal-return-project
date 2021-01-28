import Item from '../../types/Item';

export const Crossbow: Item = {
	"id": 115101,
	"name": "Crossbow",
	"buildsInto": [
		115201,
		115202
	],
	"requirements": {
		"Short Crossbow": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 30
	},
	"rarity": "Common",
	"code": "석궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A mechanical bow that requires little human strength, but reloading takes a little longer than an ordinary bow.",
	"buildsFrom": [],
	"displayName": "Crossbow",
	"apiMetaData": {
		"code": 115101,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
