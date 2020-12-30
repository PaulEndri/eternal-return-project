import Item from '../../types/Item';

export const WonderfulTonight: Item = {
	"id": 121405,
	"name": "Wonderful Tonight",
	"buildsFrom": [
		{
			"name": "Superstrat",
			"id": 121305
		},
		{
			"name": "Meteorite",
			"id": 401209
		}
	],
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Bamboo": 1,
		"Meteorite": 1
	},
	"stats": {
		"attackPower": 100,
		"attackSpeedRatio": 0.45,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If it's late in the evening, and you're wondering what item to craft, try this one!",
	"apiMetaData": {
		"code": 121405,
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
