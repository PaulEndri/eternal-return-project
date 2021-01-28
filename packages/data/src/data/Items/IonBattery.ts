import Item from '../../types/Item';

export const IonBattery: Item = {
	"id": 401306,
	"name": "IonBattery",
	"buildsInto": [
		103501,
		104403,
		107403,
		113401,
		116405
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
		401205,
		301107
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
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
