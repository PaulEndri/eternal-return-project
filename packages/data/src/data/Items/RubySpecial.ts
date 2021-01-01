import Item from '../../types/Item';

export const RubySpecial: Item = {
	"id": 121301,
	"name": "RubySpecial",
	"buildsFrom": [
		{
			"name": "Single Coil Pickup",
			"id": 121202
		},
		{
			"name": "Ruby",
			"id": 401204
		}
	],
	"buildsInto": [
		{
			"name": "Bohemian",
			"id": 121401
		}
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
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Rare",
	"code": "루비스페셜",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A unique guitar that is as red as a ruby.",
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
