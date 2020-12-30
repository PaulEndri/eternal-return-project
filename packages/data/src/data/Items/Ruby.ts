import Item from '../../types/Item';

export const Ruby: Item = {
	"id": 401204,
	"name": "Ruby",
	"buildsFrom": [
		{
			"name": "Hammer",
			"id": 104101
		},
		{
			"name": "Gemstone",
			"id": 401114
		}
	],
	"buildsInto": [
		{
			"name": "Jewel Sword",
			"id": 102404
		},
		{
			"name": "Santa Muerte",
			"id": "Santa Muerte"
		},
		{
			"name": "Bloodwing Knuckles",
			"id": 110407
		},
		{
			"name": "Ruby Special",
			"id": 121301
		},
		{
			"name": "Imperial Crown",
			"id": 201409
		},
		{
			"name": "Sunset Armor",
			"id": 202402
		},
		{
			"name": "Crimson Bracelet",
			"id": 203304
		},
		{
			"name": "Sword of Shah Jahan",
			"id": 203407
		}
	],
	"requirements": {
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "Rubies and sapphires actually have the same chemical composition and mineral structure! However, rubies have a small amount of chromium that makes them appear red.",
	"apiMetaData": {
		"code": 401204,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		}
	],
	"airSupply": true,
	"collectible": 0
}
