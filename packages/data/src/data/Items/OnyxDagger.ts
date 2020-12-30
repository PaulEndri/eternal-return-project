import Item from '../../types/Item';

export const OnyxDagger: Item = {
	"id": 113206,
	"name": "Onyx Dagger",
	"buildsFrom": [
		{
			"name": "Razor",
			"id": 113101
		},
		{
			"name": "Cross",
			"id": 205109
		}
	],
	"buildsInto": [
		{
			"name": "Willow Leaf Spike",
			"id": 113207
		},
		{
			"name": "Azure Dagger",
			"id": 113409
		}
	],
	"requirements": {
		"Razor": 1,
		"Cross": 1
	},
	"stats": {
		"attackPower": 17,
		"charges": 50,
		"increaseBasicAttackDamage": 10
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Made out of a throwing dagger and a cross. It practically jumps from the tips of your fingers to fly into the heart of your enemy",
	"apiMetaData": {
		"code": 113206,
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
