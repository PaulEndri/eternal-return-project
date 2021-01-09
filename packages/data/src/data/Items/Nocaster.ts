import Item from '../../types/Item';

export const Nocaster: Item = {
	"id": 121304,
	"name": "Nocaster",
	"buildsInto": [
		{
			"name": "Satisfaction",
			"id": 121404
		}
	],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Fountain Pen": 1,
		"Paper": 1
	},
	"stats": {
		"attackPower": 15,
		"attackSpeedRatio": 0.2,
		"lifeSteal": 0.1,
		"increaseBasicAttackDamage": 10
	},
	"rarity": "Rare",
	"code": "노캐스터",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The most used title in art is \"Untitled\". Isn't there an unsaid rule that says not to do that with guitar names?",
	"buildsFrom": [
		{
			"name": "Single Coil Pickup",
			"id": 121202
		},
		{
			"name": "Blueprint",
			"id": 401212
		}
	],
	"displayName": "Nocaster",
	"apiMetaData": {
		"code": 121304,
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
