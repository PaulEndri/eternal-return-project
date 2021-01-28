import Item from '../../types/Item';

export const CellPhone: Item = {
	"id": 501401,
	"name": "CellPhone",
	"buildsInto": [
		203405,
		502502
	],
	"requirements": {
		"Fountain Pen": 1,
		"Paper": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "휴대폰",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "I'm not getting any bars here...",
	"buildsFrom": [
		401212,
		401211
	],
	"displayName": "Cell Phone",
	"apiMetaData": {
		"code": 501401,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		6,
		7
	],
	"airSupply": true,
	"collectible": 0
}
