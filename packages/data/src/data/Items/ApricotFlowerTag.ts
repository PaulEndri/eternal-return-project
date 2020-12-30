import Item from '../../types/Item';

export const ApricotFlowerTag: Item = {
	"id": 113302,
	"name": "Apricot Flower Tag",
	"buildsFrom": [
		{
			"name": "Willow Leaf Spike",
			"id": 113207
		},
		{
			"name": "Flower",
			"id": 205102
		}
	],
	"buildsInto": [
		{
			"name": "Fuhma Shuriken",
			"id": 113406
		}
	],
	"requirements": {
		"Razor": 1,
		"Cross": 1,
		"Branch": 1,
		"Flower": 1
	},
	"stats": {
		"attackPower": 14,
		"charges": 50,
		"cooldownReduction": 0.1,
		"increaseBasicAttackDamage": 30
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A brazen claim by some say they used to be fighters, but nobody has ever actually seen them fight.",
	"apiMetaData": {
		"code": 113302,
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
