import Item from '../../types/Item';

export const ArmyKnife: Item = {
	"id": 101201,
	"name": "ArmyKnife",
	"buildsInto": [
		101301,
		101404,
		101405
	],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1
	},
	"stats": {
		"attackPower": 14,
		"moveSpeed": 0.08,
		"moveSpeedOutOfCombat": 0.2
	},
	"rarity": "Uncommon",
	"code": "군용나이프",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Very threatening yet easy to carry. It faithfully performs its duties, such as cutting and stabbing.",
	"buildsFrom": [
		101104,
		108101
	],
	"displayName": "Army Knife",
	"apiMetaData": {
		"code": 101201,
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
