import Item from '../../types/Item';

export const Cloth: Item = {
	"id": 401113,
	"name": "Cloth",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Dress",
			"id": 202207
		},
		{
			"name": "Repaired Slippers",
			"id": 204301
		},
		{
			"name": "Doll",
			"id": 205205
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "옷감",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Temple": 7,
		"Avenue": 7,
		"Hotel": 7
	},
	"foundQuantity": 1,
	"description": "Made by weaving fibers. Different thread types make different fabrics.",
	"displayName": "Cloth",
	"apiMetaData": {
		"code": 401113,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Boar",
			"id": 3
		}
	],
	"airSupply": false,
	"collectible": 0
}
