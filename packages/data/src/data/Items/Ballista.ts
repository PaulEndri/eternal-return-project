import Item from '../../types/Item';

export const Ballista: Item = {
	"id": 115403,
	"name": "Ballista",
	"buildsFrom": [
		{
			"name": "Heavy Crossbow",
			"id": 115303
		},
		{
			"name": "Short Spear",
			"id": 107101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Short Spear": 1
	},
	"stats": {
		"attackPower": 115,
		"attackSpeedRatio": -0.05,
		"charges": 6,
		"moveSpeed": -0.05
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A smaller bow originally designed for siege warfare. It boasts incredible power.",
	"apiMetaData": {
		"code": 115403,
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
