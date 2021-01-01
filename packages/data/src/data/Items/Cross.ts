import Item from '../../types/Item';

export const Cross: Item = {
	"id": 205109,
	"name": "Cross",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Arondight",
			"id": 102406
		},
		{
			"name": "Divine Fist",
			"id": 110406
		},
		{
			"name": "Grenade of Antioch",
			"id": 112305
		},
		{
			"name": "Onyx Dagger",
			"id": 113206
		},
		{
			"name": "Saint's Relic",
			"id": 205202
		}
	],
	"requirements": {},
	"stats": {
		"increaseBasicAttackDamage": 7
	},
	"rarity": "Common",
	"code": "십자가",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Chapel": 9
	},
	"foundQuantity": 1,
	"description": "Feeling...holy?",
	"displayName": "Cross",
	"apiMetaData": {
		"code": 205109,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
