import Item from '../../types/Item';

export const Blueprint: Item = {
	"id": 401212,
	"name": "Blueprint",
	"buildsFrom": [
		{
			"name": "Fountain Pen",
			"id": 101102
		},
		{
			"name": "Paper",
			"id": 401117
		}
	],
	"buildsInto": [
		{
			"name": "Monohoshizao",
			"id": 102410
		},
		{
			"name": "Florentine",
			"id": 103301
		},
		{
			"name": "Tactical Tonfa",
			"id": 111402
		},
		{
			"name": "Magnum-Anaconda",
			"id": 116402
		},
		{
			"name": "Tac-50",
			"id": 118403
		},
		{
			"name": "Nocaster",
			"id": 121304
		},
		{
			"name": "Cell Phone",
			"id": 501401
		}
	],
	"requirements": {
		"Fountain Pen": 1,
		"Paper": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "정교한도면",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "An elaborate blueprint. What on earth do all the lines and numbers mean?",
	"displayName": "Blueprint",
	"apiMetaData": {
		"code": 401212,
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
