import Item from '../../types/Item';

export const PurpleHaze: Item = {
	"id": 121403,
	"name": "Purple Haze",
	"buildsFrom": [
		{
			"name": "King-V",
			"id": 121303
		},
		{
			"name": "Ash",
			"id": 401210
		}
	],
	"buildsInto": [],
	"requirements": {
		"Starter Guitar": 1,
		"Pickaxe": 1,
		"Gemstone": 1,
		"Scissors": 1,
		"Paper": 1,
		"Lighter": 1
	},
	"stats": {
		"attackPower": 85,
		"increaseSkillDamageRatio": 0.22
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Whether tomorrow is waiting for you, or if it's really the end of time... this island doesn't have the answer.",
	"apiMetaData": {
		"code": 121403,
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
