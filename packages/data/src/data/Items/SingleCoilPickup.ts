import Item from '../../types/Item';

export const SingleCoilPickup: Item = {
	"id": 121202,
	"name": "SingleCoilPickup",
	"buildsInto": [
		{
			"name": "Ruby Special",
			"id": 121301
		},
		{
			"name": "Nocaster",
			"id": 121304
		},
		{
			"name": "Superstrat",
			"id": 121305
		},
		{
			"name": "Wild Horse",
			"id": 121306
		}
	],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1
	},
	"stats": {
		"attackPower": 8,
		"attackSpeedRatio": 0.15,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Uncommon",
	"code": "싱글픽업",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Single coil guitars generally have a brighter, crisper output, and sound clearer.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 121101
		},
		{
			"name": "Scissors",
			"id": 401205
		}
	],
	"displayName": "Single Coil Pickup",
	"apiMetaData": {
		"code": 121202,
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
