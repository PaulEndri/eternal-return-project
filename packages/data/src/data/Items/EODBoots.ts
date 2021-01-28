import Item from '../../types/Item';

export const EODBoots: Item = {
	"id": 204409,
	"name": "EODBoots",
	"buildsInto": [],
	"requirements": {
		"Running Shoes": 1,
		"Oil": 1,
		"Bandage": 1,
		"Tights": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"defense": 26,
		"hpRegen": 1,
		"moveSpeed": 0.33
	},
	"rarity": "Legend",
	"code": "EOD부츠",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Boots worn by explosives disposal teams. They protect the wearer's legs from shrapnel if something goes wrong.",
	"buildsFrom": [
		204302,
		204401
	],
	"displayName": "EOD Boots",
	"apiMetaData": {
		"code": 204409,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
