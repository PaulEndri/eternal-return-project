import Item from '../../types/Item';

export const Crown: Item = {
	"id": 201401,
	"name": "Crown",
	"buildsInto": [
		{
			"name": "Imperial Crown",
			"id": 201409
		}
	],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"defense": 16,
		"maxSp": 360,
		"increaseSkillDamageRatio": 0.08
	},
	"rarity": "Rare",
	"code": "왕관",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The one  to wear the crown must bear its weight.",
	"buildsFrom": [
		{
			"name": "Circlet",
			"id": 201202
		},
		{
			"name": "Gold",
			"id": 401214
		}
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
