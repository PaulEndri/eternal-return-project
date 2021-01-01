import Item from '../../types/Item';

export const Sheath: Item = {
	"id": 203301,
	"name": "Sheath",
	"buildsFrom": [
		{
			"name": "Leather",
			"id": 401103
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		}
	],
	"buildsInto": [
		{
			"name": "Sword of Shah Jahan",
			"id": 203407
		}
	],
	"requirements": {
		"Leather": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 18,
		"preventBasicAttackDamaged": 2
	},
	"rarity": "Rare",
	"code": "검집",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Used to keep your blade sharp. Often decorated with jewels.",
	"displayName": "Sheath",
	"apiMetaData": {
		"code": 203301,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}