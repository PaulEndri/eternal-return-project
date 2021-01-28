import Item from '../../types/Item';

export const KitchenKnife: Item = {
	"id": 101104,
	"name": "KitchenKnife",
	"buildsInto": [
		101201,
		103201,
		107301,
		502303
	],
	"requirements": {},
	"stats": {
		"attackPower": 4,
		"moveSpeed": 0.05,
		"moveSpeedOutOfCombat": 0.1
	},
	"rarity": "Common",
	"code": "식칼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 5,
		"Hotel": 4,
		"Dock": 4
	},
	"foundQuantity": 1,
	"description": "A knife used in the kitchen. It can be a deadly weapon in the hands of an expert.",
	"buildsFrom": [],
	"displayName": "Kitchen Knife",
	"apiMetaData": {
		"code": 101104,
		"category": "Weapon",
		"type": "OneHandSword"
	},
	"clientMetaData": {
		"type": "Dagger",
		"category": "Weapon"
	},
	"droppedFrom": [
		3
	],
	"airSupply": false,
	"collectible": 0
}
