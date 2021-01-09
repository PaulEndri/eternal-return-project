import Item from '../../types/Item';

export const Alcohol: Item = {
	"id": 401111,
	"name": "Alcohol",
	"buildsInto": [
		{
			"name": "Fuhma Shuriken",
			"id": 113406
		},
		{
			"name": "Baijiu",
			"id": 301204
		},
		{
			"name": "Soju",
			"id": 301205
		},
		{
			"name": "Coffee Liqueur",
			"id": 301208
		},
		{
			"name": "Disinfectant",
			"id": 302213
		},
		{
			"name": "Acupuncture Needle",
			"id": 302217
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "알코올",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Hospital": 4,
		"School": 5,
		"Factory": 6
	},
	"foundQuantity": 1,
	"description": "Whenever you smell this, either a laboratory or a hospital might come to mind.",
	"buildsFrom": [],
	"displayName": "Alcohol",
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
