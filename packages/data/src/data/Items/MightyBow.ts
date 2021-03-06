import Item from '../../types/Item';

export const MightyBow: Item = {
	"id": 114303,
	"name": "MightyBow",
	"buildsInto": [
		114302
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 25,
		"preventBasicAttackDamaged": 11
	},
	"rarity": "Rare",
	"code": "벽력궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow that can be made by combining a bow and gunpowder. While hiding in darkness, you must draw the bow quietly, but quickly.",
	"buildsFrom": [
		114202,
		401121
	],
	"displayName": "Mighty Bow",
	"apiMetaData": {
		"code": 114303,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
