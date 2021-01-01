import Item from '../../types/Item';

export const ElectronicParts: Item = {
	"id": 401211,
	"name": "ElectronicParts",
	"buildsFrom": [
		{
			"name": "Battery",
			"id": 401110
		},
		{
			"name": "Piano Wire",
			"id": 502104
		}
	],
	"buildsInto": [
		{
			"name": "Railgun",
			"id": 118402
		},
		{
			"name": "Volticletto",
			"id": 120403
		},
		{
			"name": "Tactical OPS Helmet",
			"id": 201406
		},
		{
			"name": "Maverick Runner",
			"id": 204403
		},
		{
			"name": "Motor",
			"id": 401303
		},
		{
			"name": "Cell Phone",
			"id": 501401
		}
	],
	"requirements": {
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "전자부품",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can likely craft something out of this.",
	"displayName": "Electronic Parts",
	"apiMetaData": {
		"code": 401211,
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
