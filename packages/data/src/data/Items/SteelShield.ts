import Item from '../../types/Item';

export const SteelShield: Item = {
	"id": 203401,
	"name": "SteelShield",
	"buildsInto": [
		203406
	],
	"requirements": {
		"Turtle Shell": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 23,
		"defense": 20,
		"moveSpeed": -0.05
	},
	"rarity": "Rare",
	"code": "강철방패",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A durable shield made of metal and leather.",
	"buildsFrom": [
		203201,
		401201
	],
	"displayName": "Steel Shield",
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
