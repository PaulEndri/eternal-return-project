import Item from '../../types/Item';

export const Superstrat: Item = {
	"id": 121305,
	"name": "Superstrat",
	"buildsInto": [
		{
			"name": "Wonderful Tonight",
			"id": 121405
		},
		{
			"name": "The Wall",
			"id": 121406
		}
	],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 19,
		"attackSpeedRatio": 0.15,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Rare",
	"code": "슈퍼스트랫",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Collectively refers to the most famous types of guitars in the world.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 121202
		},
		{
			"name": "Scissors",
			"id": 108103
		}
	],
	"displayName": "Superstrat",
	"apiMetaData": {
		"code": 121305,
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
