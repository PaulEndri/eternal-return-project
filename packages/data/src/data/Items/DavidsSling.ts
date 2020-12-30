import Item from '../../types/Item';

export const DavidsSling: Item = {
	"id": "David's Sling",
	"name": "David's Sling",
	"href": "/David's_Sling",
	"buildsFrom": [
		{
			"name": "Sling",
			"id": 112204
		},
		{
			"name": "Saint's Relic",
			"id": "Saint's Relic"
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
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
