import Item from '../../types/Item';

export const PlayingCards: Item = {
	"id": 113102,
	"name": "PlayingCards",
	"buildsInto": [
		{
			"name": "Vintage Cards",
			"id": 113203
		},
		{
			"name": "Bohemian",
			"id": 121401
		},
		{
			"name": "Flower of Fate",
			"id": 205203
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 4,
		"charges": 52,
		"criticalStrikeChance": 0.05
	},
	"rarity": "Common",
	"code": "트럼프카드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 7,
		"Hotel": 6
	},
	"foundQuantity": 1,
	"description": "It's exhilarating to have a lucky win streak.",
	"buildsFrom": [],
	"displayName": "Playing Cards",
	"apiMetaData": {
		"code": 113102,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
