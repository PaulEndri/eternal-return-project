import Item from '../../types/Item';

export const HeavyCrossbow: Item = {
	"id": 115303,
	"name": "Heavy Crossbow",
	"buildsFrom": [
		{
			"name": "Long Crossbow",
			"id": 115201
		},
		{
			"name": "Steel",
			"id": 401201
		}
	],
	"buildsInto": [
		{
			"name": "Ballista",
			"id": 115403
		}
	],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 72,
		"charges": 6,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Heavier than a standard crossbow, but also that much stronger. It was a popular weapon in Medieval Europe as it was easy to learn and use.",
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
