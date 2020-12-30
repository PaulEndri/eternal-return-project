import Item from '../../types/Item';

export const Bleeder: Item = {
	"id": 119302,
	"name": "Bleeder",
	"buildsFrom": [
		{
			"name": "Nunchaku",
			"id": "Nunchaku"
		},
		{
			"name": "Razor",
			"id": 113101
		}
	],
	"buildsInto": [
		{
			"name": "Vibro Nunchaku",
			"id": 119402
		}
	],
	"requirements": {
		"Steel Chain": 1,
		"Scrap Metal": 1,
		"Razor": 1
	},
	"stats": {
		"attackPower": 38
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 119302,
		"category": "Weapon",
		"type": "Nunchaku"
	},
	"clientMetaData": {
		"type": "Nunchaku",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
