import Item from '../../types/Item';

export const RepairedSlippers: Item = {
	"id": 204301,
	"name": "RepairedSlippers",
	"buildsInto": [
		204406,
		204410
	],
	"requirements": {
		"Slippers": 1,
		"Cloth": 1
	},
	"stats": {
		"moveSpeed": 0.16,
		"spRegen": 0.5,
		"spRegenRatio": 0.3
	},
	"rarity": "Uncommon",
	"code": "덧댄슬리퍼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		204101,
		401113
	],
	"displayName": "Repaired Slippers",
	"apiMetaData": {
		"code": 204301,
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
