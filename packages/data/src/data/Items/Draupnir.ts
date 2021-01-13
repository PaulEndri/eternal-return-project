import Item from '../../types/Item';

export const Draupnir: Item = {
	"id": 203403,
	"name": "Draupnir",
	"buildsInto": [],
	"requirements": {
		"Bracelet": 1,
		"Pickaxe": 1,
		"Gemstone": 1,
		"Bandage": 1,
		"Leather": 1
	},
	"stats": {
		"defense": 10,
		"hpRegen": 1,
		"maxSp": 240,
		"increaseSkillDamageRatio": 0.15
	},
	"rarity": "Epic",
	"code": "드라우프니르",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The magical golden bracelet of the Norse God, Odin. It has the power to provide unthinkable riches... and a full stomach",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 203302
		},
		{
			"name": "Scissors",
			"id": 203203
		}
	],
	"displayName": "Draupnir",
	"apiMetaData": {
		"code": 203403,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
