import Item from '../../types/Item';

export const FuhmaShuriken: Item = {
	"id": 113406,
	"name": "Fuhma Shuriken",
	"buildsFrom": [
		{
			"name": "Apricot Flower Tag",
			"id": 113302
		},
		{
			"name": "Alcohol",
			"id": 401111
		}
	],
	"buildsInto": [],
	"requirements": {
		"Razor": 1,
		"Cross": 1,
		"Branch": 1,
		"Flower": 1,
		"Alcohol": 1
	},
	"stats": {
		"attackPower": 44,
		"charges": 50,
		"cooldownReduction": 0.15,
		"increaseBasicAttackDamage": 36
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A ninja star originally used by Humma, a band of ninja that were active during the Sengoku period.",
	"apiMetaData": {
		"code": 113406,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
