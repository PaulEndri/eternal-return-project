import Item from '../../types/Item';

export const Binoculars: Item = {
	"id": 205110,
	"name": "Binoculars",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Motorcycle Helmet",
			"id": 201405
		},
		{
			"name": "Sniping Scope",
			"id": "Sniping Scope"
		},
		{
			"name": "Telephoto Camera",
			"id": 502207
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 2,
		"sightRange": 1.5
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Factory": 7,
		"Hotel": 6,
		"Beach": 6
	},
	"foundQuantity": 1,
	"description": "These don't seem to zoom in much. Perhaps it's because they're homemade.",
	"apiMetaData": {
		"code": 205110,
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
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
