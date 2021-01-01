import Item from '../../types/Item';

export const BraceletOfSkadi: Item = {
	"id": 203501,
	"name": "BraceletOfSkadi",
	"buildsFrom": [
		{
			"name": "Glacial Ice",
			"id": 205402
		},
		{
			"name": "Crimson Bracelet",
			"id": 203304
		}
	],
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Ice": 1,
		"Bracelet": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"hpRegen": 2,
		"maxHp": 200,
		"maxSp": 250,
		"spRegen": 2,
		"increaseSkillDamage": 20
	},
	"rarity": "Legend",
	"code": "스카디의팔찌",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bracelet worn by Skadi, a Norse Goddess associated with winter. Do you feel a chill?",
	"displayName": "Bracelet of Skadi",
	"apiMetaData": {
		"code": 203501,
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
