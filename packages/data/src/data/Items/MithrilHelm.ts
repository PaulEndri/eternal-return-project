import Item from '../../types/Item';

export const MithrilHelm: Item = {
	"id": 201403,
	"name": "MithrilHelm",
	"buildsInto": [],
	"requirements": {
		"Mithril": 1,
		"Hat": 1,
		"Steel Chain": 1
	},
	"stats": {
		"attackSpeedRatio": 0.12,
		"cooldownReduction": 0.1,
		"defense": 38,
		"lifeSteal": 0.15,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"code": "미스릴투구",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A helm made of mithril that's been reforged through generations. Delicate reliefs carved into the surface hint at the craftsmanship invested into it.",
	"buildsFrom": [
		401304,
		201204
	],
	"displayName": "Mithril Helm",
	"apiMetaData": {
		"code": 201403,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
