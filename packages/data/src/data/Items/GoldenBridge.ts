import Item from '../../types/Item';

export const GoldenBridge: Item = {
	"id": 121201,
	"name": "GoldenBridge",
	"buildsInto": [
		121302,
		121303
	],
	"requirements": {
		"Starter Guitar": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 8,
		"preventSkillDamagedRatio": 0.14
	},
	"rarity": "Uncommon",
	"code": "골든브릿지",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Some people think that the more expensive it is, the better it sounds.",
	"buildsFrom": [
		121101,
		401214
	],
	"displayName": "Golden Bridge",
	"apiMetaData": {
		"code": 121201,
		"category": "Weapon",
		"type": "Guitar"
	},
	"clientMetaData": {
		"type": "Guitar",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
