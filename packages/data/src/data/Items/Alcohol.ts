import Item from '../../types/Item';

export const Alcohol: Item = {
	"id": 401111,
	"name": "Alcohol",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Fuhma Shuriken",
			"id": 113406
		},
		{
			"name": "Baijiu",
			"id": "Baijiu"
		},
		{
			"name": "Soju",
			"id": "Soju"
		},
		{
			"name": "Coffee Liqueur",
			"id": "Coffee Liqueur"
		},
		{
			"name": "Disinfectant",
			"id": "Disinfectant"
		},
		{
			"name": "Acupuncture Needle",
			"id": "Acupuncture Needle"
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Hospital": 4,
		"School": 5,
		"Factory": 6
	},
	"foundQuantity": 1,
	"description": "Whenever you smell this, either a laboratory or a hospital might come to mind.",
	"apiMetaData": {
		"code": 401111,
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
