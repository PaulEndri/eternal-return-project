import Item from '../../types/Item';

export const Carnwennan: Item = {
	"id": 101401,
	"name": "Carnwennan",
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Flower": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 44,
		"hpRegen": 1.2,
		"lifeSteal": 0.12,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1,
		"preventBasicAttackDamaged": 29
	},
	"rarity": "Epic",
	"code": "카른웬난",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		101301,
		205202
	],
	"displayName": "Carnwennan",
	"apiMetaData": {
		"code": 101401,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
