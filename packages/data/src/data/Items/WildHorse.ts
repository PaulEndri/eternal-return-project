import Item from '../../types/Item';

export const WildHorse: Item = {
	"id": 121306,
	"name": "WildHorse",
	"buildsInto": [
		121407
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
		"preventBasicAttackDamaged": 6
	},
	"rarity": "Rare",
	"code": "야생마",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "If it follows in the footsteps of the performance it takes its name from, you can probably expect to be in front of a large audience with this one.",
	"buildsFrom": [
		121202,
		401112
	],
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
