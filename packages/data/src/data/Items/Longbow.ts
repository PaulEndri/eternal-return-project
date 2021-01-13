import Item from '../../types/Item';

export const Longbow: Item = {
	"id": 114202,
	"name": "Longbow",
	"buildsInto": [
		{
			"name": "Composite Bow",
			"id": 114203
		},
		{
			"name": "Mighty Bow",
			"id": 114303
		},
		{
			"name": "Scorchbow",
			"id": 114402
		}
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1
	},
	"stats": {
		"attackPower": 25
	},
	"rarity": "Uncommon",
	"code": "장궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A unique Korean bow incorporating a horn in its designs. Anyone can use the bow, as it will adapt to the user.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 114101
		},
		{
			"name": "Scissors",
			"id": 401105
		}
	],
	"displayName": "Longbow",
	"apiMetaData": {
		"code": 114202,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
