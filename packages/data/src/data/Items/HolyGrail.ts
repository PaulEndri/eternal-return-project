import Item from '../../types/Item';

export const HolyGrail: Item = {
	"id": 205108,
	"name": "Holy Grail",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Excalibur",
			"id": 102407
		},
		{
			"name": "Stairway to Heaven",
			"id": 121402
		},
		{
			"name": "Saint's Relic",
			"id": 205202
		}
	],
	"requirements": {},
	"stats": {
		"hpRegenRatio": 1.2
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Chapel": 9
	},
	"foundQuantity": 1,
	"description": "A relic that has materializes through various trials and adventures in Medieval myths. Many knights endured the trials, yet none ended up with a happy ending.",
	"apiMetaData": {
		"code": 205108,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		},
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
