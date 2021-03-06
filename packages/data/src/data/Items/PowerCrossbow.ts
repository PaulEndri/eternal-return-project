import Item from '../../types/Item';

export const PowerCrossbow: Item = {
	"id": 115301,
	"name": "PowerCrossbow",
	"buildsInto": [
		115405
	],
	"requirements": {
		"Short Crossbow": 1,
		"Piano Wire": 1,
		"Rubber": 1
	},
	"stats": {
		"attackPower": 42,
		"charges": 6
	},
	"rarity": "Rare",
	"code": "노",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A good weapon, but it's paramount that you keep good track of your arrows.",
	"buildsFrom": [
		115201,
		401105
	],
	"displayName": "Power Crossbow",
	"apiMetaData": {
		"code": 115301,
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
