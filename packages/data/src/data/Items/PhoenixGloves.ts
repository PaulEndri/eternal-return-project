import Item from '../../types/Item';

export const PhoenixGloves: Item = {
	"id": 110404,
	"name": "PhoenixGloves",
	"buildsInto": [
		110408,
		110409
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 27,
		"increaseSkillDamageRatio": 30
	},
	"rarity": "Rare",
	"code": "회단장갑",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You cannot reach the point of Nirvana to separate your body and soul, but you can remove others' souls from their bodies with this glove.",
	"buildsFrom": [
		110201,
		401210
	],
	"displayName": "Phoenix Gloves",
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
