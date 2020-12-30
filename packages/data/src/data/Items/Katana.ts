import Item from '../../types/Item';

export const Katana: Item = {
	"id": 102301,
	"name": "Katana",
	"buildsFrom": [
		{
			"name": "Rusty Sword",
			"id": 102101
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		}
	],
	"buildsInto": [
		{
			"name": "Masamune",
			"id": 102401
		},
		{
			"name": "Muramasa",
			"id": 102402
		},
		{
			"name": "Dáinsleif",
			"id": "Dáinsleif"
		}
	],
	"requirements": {
		"Rusty Sword": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 35
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "I can't believe that I'm actually holding a Japanese sword that I saw in the movies!",
	"apiMetaData": {
		"code": 102301,
		"category": "Weapon",
		"type": "TwoHandSword"
	},
	"clientMetaData": {
		"type": "Two-Handed Sword",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
