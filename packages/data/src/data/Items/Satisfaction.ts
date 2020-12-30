import Item from '../../types/Item';

export const Satisfaction: Item = {
	"id": 121404,
	"name": "Satisfaction",
	"buildsFrom": [
		{
			"name": "Nocaster",
			"id": 121304
		},
		{
			"name": "Stone",
			"id": 112101
		}
	],
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Fountain Pen": 1,
		"Paper": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 30,
		"attackSpeedRatio": 0.3,
		"lifeSteal": 0.1,
		"increaseBasicAttackDamage": 14
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The human nature of not being satisfied is what drives development. Humanity always blindly trusts evolution.",
	"apiMetaData": {
		"code": 121404,
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
