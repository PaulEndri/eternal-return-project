import Item from '../../types/Item';

export const Ballista: Item = {
	"id": 115403,
	"name": "Ballista",
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
		"charges": 6
	},
	"rarity": "Epic",
	"code": "발리스타",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A smaller bow originally designed for siege warfare. It boasts incredible power.",
	"buildsFrom": [
		115303,
		107101
	],
	"displayName": "Ballista",
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
