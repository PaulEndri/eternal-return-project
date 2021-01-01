import Item from '../../types/Item';

export const WildHorse: Item = {
	"id": 121306,
	"name": "WildHorse",
	"buildsFrom": [
		{
			"name": "Single Coil Pickup",
			"id": 121202
		},
		{
			"name": "Oil",
			"id": 401112
		}
	],
	"buildsInto": [
		{
			"name": "Teen Spirit",
			"id": 121407
		}
	],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Oil": 1
	},
	"stats": {
		"attackPower": 9,
		"attackSpeedRatio": 0.25,
		"increaseBasicAttackDamage": 6
	},
	"rarity": "Rare",
	"code": "야생마",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If it follows in the footsteps of the performance it takes its name from, you can probably expect to be in front of a large audience with this one.",
	"displayName": "Wild Horse",
	"apiMetaData": {
		"code": 121306,
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
