import Item from '../../types/Item';

export const SantaMuerte: Item = {
	"id": 105403,
	"name": "SantaMuerte",
	"buildsInto": [],
	"requirements": {
		"Pickaxe": 1,
		"Steel Chain": 1,
		"Short Rod": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 100,
		"attackRange": 0.5,
		"maxHp": 450,
		"increaseBasicAttackDamage": 0.15
	},
	"rarity": "Epic",
	"code": "산타무에르떼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Santa Muerte, the Mexican goddess of death, cuts off all negative energies with her long-handled scythe.",
	"buildsFrom": [
		105302,
		401204
	],
	"displayName": "Santa Muerte",
	"apiMetaData": {
		"code": 105403,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
