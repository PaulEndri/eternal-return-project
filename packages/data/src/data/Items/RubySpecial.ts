import Item from '../../types/Item';

export const RubySpecial: Item = {
	"id": 121301,
	"name": "RubySpecial",
	"buildsInto": [
		121401
	],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 20,
		"attackSpeedRatio": 0.2,
		"maxHp": 300,
		"preventBasicAttackDamaged": 2
	},
	"rarity": "Rare",
	"code": "루비스페셜",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A unique guitar that is as red as a ruby.",
	"buildsFrom": [
		121202,
		401204
	],
	"displayName": "Ruby Special",
	"apiMetaData": {
		"code": 121301,
		"category": "Weapon",
		"type": "Guitar"
	},
	"clientMetaData": {
		"type": "Guitar",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
