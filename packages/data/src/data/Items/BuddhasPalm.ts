import Item from '../../types/Item';

export const BuddhasPalm: Item = {
	"id": "Buddha's Palm",
	"name": "Buddha's Palm",
	"href": "/Buddha's_Palm",
	"buildsFrom": [
		{
			"name": "Phoenix Gloves",
			"id": 110404
		},
		{
			"name": "Buddha Sarira",
			"id": 205207
		}
	],
	"buildsInto": [],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1,
		"Buddhist Scripture": 1,
		"Monk's Robe": 1
	},
	"stats": {
		"attackPower": 33,
		"cooldownReduction": 0.1,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Glove",
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
