import Item from '../../types/Item';

export const KitchenKnife: Item = {
	"id": 101104,
	"name": "Kitchen Knife",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Army Knife",
			"id": 101201
		},
		{
			"name": "Twin Swords",
			"id": 103201
		},
		{
			"name": "Bident",
			"id": 107301
		},
		{
			"name": "Jungle Guillotine",
			"id": "Jungle Guillotine"
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 4,
		"moveSpeed": 0.05,
		"moveSpeedOutOfCombat": 0.1
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 5,
		"Hotel": 4,
		"Dock": 4
	},
	"foundQuantity": 1,
	"description": "A knife used in the kitchen. It can be a deadly weapon in the hands of an expert.",
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
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
