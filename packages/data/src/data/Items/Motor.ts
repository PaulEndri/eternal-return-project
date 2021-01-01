import Item from '../../types/Item';

export const Motor: Item = {
	"id": 401303,
	"name": "Motor",
	"buildsFrom": [
		{
			"name": "Electronic Parts",
			"id": 401211
		},
		{
			"name": "Scrap Metal",
			"id": 401106
		}
	],
	"buildsInto": [
		{
			"name": "Vibroblade",
			"id": 101404
		},
		{
			"name": "Mallet",
			"id": 108404
		},
		{
			"name": "Machine Gun",
			"id": 117402
		},
		{
			"name": "Vibro Nunchaku",
			"id": 119402
		}
	],
	"requirements": {
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "모터",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "A motor itself is useless, but you can probably turn it into something great.",
	"displayName": "Motor",
	"apiMetaData": {
		"code": 401303,
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
