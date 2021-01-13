import Item from '../../types/Item';

export const IonBattery: Item = {
	"id": 401306,
	"name": "IonBattery",
	"buildsInto": [
		{
			"name": "Dioscuri",
			"id": 103501
		},
		{
			"name": "Hammer of Thor",
			"id": 104403
		},
		{
			"name": "Eighteen Foot Spear",
			"id": 107403
		},
		{
			"name": "Cards of Tyranny",
			"id": 113401
		},
		{
			"name": "Electron Blaster",
			"id": 116405
		}
	],
	"requirements": {
		"Battery": 1,
		"Water": 1,
		"Carbonated Water": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "이온전지",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "A high capacity battery made of lithium ion that can be recharged many times.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 401205
		},
		{
			"name": "Scissors",
			"id": 301107
		}
	],
	"displayName": "Ion Battery",
	"apiMetaData": {
		"code": 401306,
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
