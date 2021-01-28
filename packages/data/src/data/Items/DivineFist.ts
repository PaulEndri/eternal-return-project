import Item from '../../types/Item';

export const DivineFist: Item = {
	"id": 110406,
	"name": "DivineFist",
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Gunpowder": 1,
		"Cross": 1
	},
	"stats": {
		"attackPower": 53,
		"moveSpeed": -0.05,
		"preventBasicAttackDamaged": 33
	},
	"rarity": "Epic",
	"code": "디바인피스트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		110402,
		205109
	],
	"displayName": "Divine Fist",
	"apiMetaData": {
		"code": 110406,
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
