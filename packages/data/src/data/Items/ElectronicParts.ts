import Item from '../../types/Item';

export const ElectronicParts: Item = {
	"id": 401211,
	"name": "ElectronicParts",
	"buildsInto": [
		118402,
		120403,
		201406,
		204403,
		401303,
		501401
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
	"buildsFrom": [
		401110,
		502104
	],
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
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
