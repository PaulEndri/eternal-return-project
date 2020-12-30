import Item from '../../types/Item';

export const PhoenixGloves: Item = {
	"id": 110404,
	"name": "Phoenix Gloves",
	"buildsFrom": [
		{
			"name": "Leather Gloves",
			"id": 110201
		},
		{
			"name": "Ash",
			"id": 401210
		}
	],
	"buildsInto": [
		{
			"name": "Frost Petal Hand",
			"id": 110408
		},
		{
			"name": "Buddha's Palm",
			"id": "Buddha's Palm"
		}
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 27,
		"increaseSkillDamage": 30
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You cannot reach the point of Nirvana to separate your body and soul, but you can remove others' souls from their bodies with this glove.",
	"apiMetaData": {
		"code": 110404,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
