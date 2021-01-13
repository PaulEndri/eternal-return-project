import Item from '../../types/Item';

export const SteelKneePads: Item = {
	"id": 204401,
	"name": "SteelKneePads",
	"buildsInto": [
		{
			"name": "EOD Boots",
			"id": 204409
		}
	],
	"requirements": {
		"Tights": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"defense": 20,
		"moveSpeed": 0.24
	},
	"rarity": "Rare",
	"code": "강철무릎보호대",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A kick to the shin is a favorite among angry girlfriends. Keep your shins protected.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 204201
		},
		{
			"name": "Scissors",
			"id": 401201
		}
	],
	"displayName": "Steel Knee Pads",
	"apiMetaData": {
		"code": 204401,
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
