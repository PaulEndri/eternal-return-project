import Item from '../../types/Item';

export const Bohemian: Item = {
	"id": 121401,
	"name": "Bohemian",
	"buildsFrom": [
		{
			"name": "Ruby Special",
			"id": 121301
		},
		{
			"name": "Playing Cards",
			"id": 113102
		}
	],
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Battery": 1,
		"Water": 1,
		"Hammer": 1,
		"Gemstone": 1,
		"Playing Cards": 1
	},
	"stats": {
		"attackPower": 50,
		"attackSpeedRatio": 0.2,
		"criticalStrikeChance": 0.2,
		"maxHp": 380,
		"increaseBasicAttackDamage": 2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "\"Bohemian\" was first used to describe a part of the Czech population, but it is now used to represent free spirits.",
	"apiMetaData": {
		"code": 121401,
		"category": "Weapon",
		"type": "Guitar"
	},
	"clientMetaData": {
		"type": "Guitar",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
