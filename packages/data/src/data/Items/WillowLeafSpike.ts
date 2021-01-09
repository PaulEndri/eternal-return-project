import Item from '../../types/Item';

export const WillowLeafSpike: Item = {
	"id": 113207,
	"name": "WillowLeafSpike",
	"buildsInto": [
		{
			"name": "Apricot Flower Tag",
			"id": 113302
		}
	],
	"requirements": {
		"Razor": 1,
		"Cross": 1,
		"Branch": 1
	},
	"stats": {
		"attackPower": 17,
		"charges": 50,
		"increaseBasicAttackDamage": 20
	},
	"rarity": "Rare",
	"code": "유엽비도",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		{
			"name": "Onyx Dagger",
			"id": 113206
		},
		{
			"name": "Branch",
			"id": 108101
		}
	],
	"displayName": "Willow Leaf Spike",
	"apiMetaData": {
		"code": 113207,
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
