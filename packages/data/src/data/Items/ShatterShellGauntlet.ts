import Item from '../../types/Item';

export const ShatterShellGauntlet: Item = {
	"id": 110402,
	"name": "ShatterShellGauntlet",
	"buildsInto": [
		110406
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 32,
		"moveSpeed": -0.1,
		"preventBasicAttackDamaged": 15
	},
	"rarity": "Rare",
	"code": "벽력귀투",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A glove that adds explosive force behind each punch.",
	"buildsFrom": [
		110301,
		401121
	],
	"displayName": "Shatter Shell Gauntlet",
	"apiMetaData": {
		"code": 110402,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
