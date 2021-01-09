import Item from '../../types/Item';

export const BattleAxe: Item = {
	"id": 105202,
	"name": "BattleAxe",
	"buildsInto": [
		{
			"name": "Light Hatchet",
			"id": 105301
		},
		{
			"name": "Gigantic Axe",
			"id": 105401
		}
	],
	"requirements": {
		"Hatchet": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 47
	},
	"rarity": "Uncommon",
	"code": "전투도끼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Although it started as a tool for men, it proved itself useful in the battlefield. It's designed to rip flesh and cut bones, so it has a thinner and lighter blade than a usual ax.",
	"buildsFrom": [
		{
			"name": "Hatchet",
			"id": 105103
		},
		{
			"name": "Bamboo",
			"id": 108103
		}
	],
	"displayName": "Battle Axe",
	"apiMetaData": {
		"code": 105202,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
