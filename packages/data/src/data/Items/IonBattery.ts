import Item from '../../types/Item';

export const IonBattery: Item = {
	"id": 401306,
	"name": "Ion Battery",
	"buildsFrom": [
		{
			"name": "Dead Battery",
			"id": 401205
		},
		{
			"name": "Carbonated Water",
			"id": 301107
		}
	],
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
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "A high capacity battery made of lithium ion that can be recharged many times.",
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
