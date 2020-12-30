import Item from '../../types/Item';

export const RunningShoes: Item = {
	"id": 204102,
	"name": "Running Shoes",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Heelys",
			"id": 204204
		},
		{
			"name": "Boots",
			"id": 204302
		}
	],
	"requirements": {},
	"stats": {
		"moveSpeed": 0.08
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Archery Range": 5,
		"Uptown": 6
	},
	"foundQuantity": 1,
	"description": "Everyone likes running shoes. You can walk in them, too y'know.",
	"apiMetaData": {
		"code": 204102,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
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
