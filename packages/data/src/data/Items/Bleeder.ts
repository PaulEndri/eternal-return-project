import Item from '../../types/Item';

export const Bleeder: Item = {
	"id": 119302,
	"name": "Bleeder",
	"buildsFrom": [
		{
			"name": "Nunchaku",
			"id": 119201
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
	"code": "블리더",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Bleeder",
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
