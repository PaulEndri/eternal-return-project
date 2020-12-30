import Item from '../../types/Item';

export const DivingSuit: Item = {
	"id": 202210,
	"name": "Diving Suit",
	"buildsFrom": [
		{
			"name": "Full Body Swimsuit",
			"id": "Full Body Swimsuit"
		},
		{
			"name": "Rubber",
			"id": 401105
		}
	],
	"buildsInto": [
		{
			"name": "Optical Camouflage Suit",
			"id": "Optical Camouflage Suit"
		},
		{
			"name": "Battle Suit",
			"id": "Battle Suit"
		}
	],
	"requirements": {
		"Full Body Swimsuit": 1,
		"Rubber": 1
	},
	"stats": {
		"defense": 9,
		"preventSkillDamagedRatio": 0.1
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A diving suit with filler between the inner and outer skin. It excels at maintaining body temperature and enduring higher pressure.",
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
