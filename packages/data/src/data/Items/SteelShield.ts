import Item from '../../types/Item';

export const SteelShield: Item = {
	"id": 203401,
	"name": "Steel Shield",
	"buildsFrom": [
		{
			"name": "Leather Shield",
			"id": 203201
		},
		{
			"name": "Steel",
			"id": 401201
		}
	],
	"buildsInto": [
		{
			"name": "Creed of the Knight",
			"id": 203406
		}
	],
	"requirements": {
		"Turtle Shell": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 23,
		"defense": 25,
		"moveSpeed": -0.1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A durable shield made of metal and leather.",
	"apiMetaData": {
		"code": 203401,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
