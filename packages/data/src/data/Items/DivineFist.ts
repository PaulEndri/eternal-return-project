import Item from '../../types/Item';

export const DivineFist: Item = {
	"id": 110406,
	"name": "DivineFist",
	"buildsFrom": [
		{
			"name": "Shatter Shell Gauntlet",
			"id": 110402
		},
		{
			"name": "Cross",
			"id": 205109
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Gunpowder": 1,
		"Cross": 1
	},
	"stats": {
		"attackPower": 46,
		"moveSpeed": -0.05,
		"increaseBasicAttackDamage": 33
	},
	"rarity": "Epic",
	"code": "디바인피스트",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
