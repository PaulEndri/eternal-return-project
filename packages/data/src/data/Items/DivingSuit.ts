import Item from '../../types/Item';

export const DivingSuit: Item = {
	"id": 202210,
	"name": "DivingSuit",
	"buildsInto": [
		{
			"name": "Optical Camouflage Suit",
			"id": 202405
		},
		{
			"name": "Battle Suit",
			"id": 202415
		}
	],
	"requirements": {
		"Rubber": 1
	},
	"stats": {
		"defense": 9,
		"preventSkillDamagedRatio": 0.1
	},
	"rarity": "Uncommon",
	"code": "잠수복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A diving suit with filler between the inner and outer skin. It excels at maintaining body temperature and enduring higher pressure.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 202105
		},
		{
			"name": "Scissors",
			"id": 401105
		}
	],
	"displayName": "Diving Suit",
	"apiMetaData": {
		"code": 202210,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
