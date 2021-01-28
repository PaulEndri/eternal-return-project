import Item from '../../types/Item';

export const Vibroblade: Item = {
	"id": 101404,
	"name": "Vibroblade",
	"buildsInto": [],
	"requirements": {
		"Kitchen Knife": 1,
		"Branch": 1,
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 57,
		"attackSpeedRatio": 0.4,
		"moveSpeed": 0.1,
		"moveSpeedOutOfCombat": 0.1
	},
	"rarity": "Epic",
	"code": "초진동나이프",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "This high-frequency vibrating blade will cleave the matter of its target at a molecular level. The knife vibrates at a frequency beyond human imagination.",
	"buildsFrom": [
		101201,
		401303
	],
	"displayName": "Vibroblade",
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
