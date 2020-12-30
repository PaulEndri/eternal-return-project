import Item from '../../types/Item';

export const MithrilBoots: Item = {
	"id": 204407,
	"name": "Mithril Boots",
	"buildsFrom": [
		{
			"name": "Mithril",
			"id": 401304
		},
		{
			"name": "Chain Leggings",
			"id": 204202
		}
	],
	"buildsInto": [],
	"requirements": {
		"Mithril": 1,
		"Tights": 1,
		"Steel Chain": 1
	},
	"stats": {
		"attackSpeedRatio": 0.12,
		"defense": 22,
		"moveSpeed": 0.45
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Boots made out of mithril. Stronger than steel and fireproof, too!",
	"apiMetaData": {
		"code": 204407,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
