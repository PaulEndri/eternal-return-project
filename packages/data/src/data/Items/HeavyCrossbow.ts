import Item from '../../types/Item';

export const HeavyCrossbow: Item = {
	"id": 115303,
	"name": "HeavyCrossbow",
	"buildsInto": [
		115403
	],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 69,
		"charges": 6,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"code": "헤비크로스보우",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Heavier than a standard crossbow, but also that much stronger. It was a popular weapon in Medieval Europe as it was easy to learn and use.",
	"buildsFrom": [
		115201,
		401201
	],
	"displayName": "Heavy Crossbow",
	"apiMetaData": {
		"code": 115303,
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
