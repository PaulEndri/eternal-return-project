import Item from '../../types/Item';

export const DavidsSling: Item = {
	"id": 112401,
	"name": "David's Sling",
	"buildsFrom": [
		{
			"name": "Sling",
			"id": 112204
		},
		{
			"name": "Saint's Relic",
			"id": 205202
		}
	],
	"buildsInto": [],
	"requirements": {
		"Baseball": 1,
		"Fountain Pen": 1,
		"Rubber": 1,
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"attackPower": 75,
		"charges": 50,
		"hpRegenRatio": 1.5,
		"increaseBasicAttackDamage": 30
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "David's legendary stone that killed Goliath, the giant of Philistine.",
	"apiMetaData": {
		"code": 112401,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
