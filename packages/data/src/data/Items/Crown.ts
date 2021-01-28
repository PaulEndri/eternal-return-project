import Item from '../../types/Item';

export const Crown: Item = {
	"id": 201401,
	"name": "Crown",
	"buildsInto": [
		201409
	],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"cooldownReduction": 0.07,
		"defense": 16,
		"maxSp": 360,
		"preventSkillDamagedRatio": 0.08
	},
	"rarity": "Rare",
	"code": "왕관",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The one  to wear the crown must bear its weight.",
	"buildsFrom": [
		201202,
		401214
	],
	"displayName": "Crown",
	"apiMetaData": {
		"code": 201401,
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
