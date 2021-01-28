import Item from '../../types/Item';

export const LeatherGloves: Item = {
	"id": 110201,
	"name": "LeatherGloves",
	"buildsInto": [
		110404,
		110412
	],
	"requirements": {
		"Cotton Gloves": 1,
		"Leather": 1
	},
	"stats": {
		"attackPower": 18
	},
	"rarity": "Uncommon",
	"code": "글러브",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"buildsFrom": [
		110102,
		401103
	],
	"displayName": "Leather Gloves",
	"apiMetaData": {
		"code": 110201,
		"category": "Weapon",
		"type": "Glove"
	},
	"clientMetaData": {
		"type": "Glove",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
