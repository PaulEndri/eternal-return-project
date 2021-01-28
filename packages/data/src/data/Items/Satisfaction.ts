import Item from '../../types/Item';

export const Satisfaction: Item = {
	"id": 121404,
	"name": "Satisfaction",
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
		"increaseBasicAttackDamage": 0.1,
		"preventBasicAttackDamaged": 11
	},
	"rarity": "Epic",
	"code": "새티스팩션",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The human nature of not being satisfied is what drives development. Humanity always blindly trusts evolution.",
	"buildsFrom": [
		121304,
		112101
	],
	"displayName": "Satisfaction",
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
