import Item from '../../types/Item';

export const Vibroblade: Item = {
	"id": 101404,
	"name": "Vibroblade",
	"buildsFrom": [
		{
			"name": "Army Knife",
			"id": 101201
		},
		{
			"name": "Motor",
			"id": 401303
		}
	],
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 53,
		"attackSpeedRatio": 0.3,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "This high-frequency vibrating blade will cleave the matter of its target at a molecular level. The knife vibrates at a frequency beyond human imagination.",
	"apiMetaData": {
		"code": 101404,
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
