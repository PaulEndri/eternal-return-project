import Item from '../../types/Item';

export const BambooSpear: Item = {
	"id": 107201,
	"name": "BambooSpear",
	"buildsInto": [
		107301,
		107401,
		107406
	],
	"requirements": {
		"Short Spear": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackPower": 37
	},
	"rarity": "Uncommon",
	"code": "죽창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A spear made out of bamboo. Yup.",
	"buildsFrom": [
		107101,
		108103
	],
	"displayName": "Bamboo Spear",
	"apiMetaData": {
		"code": 107201,
		"category": "Weapon",
		"type": "Spear"
	},
	"clientMetaData": {
		"type": "Spear",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
