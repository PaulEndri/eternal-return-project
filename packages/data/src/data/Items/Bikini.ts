import Item from '../../types/Item';

export const Bikini: Item = {
	"id": 202209,
	"name": "Bikini",
	"buildsFrom": [
		{
			"name": "Full Body Swimsuit",
			"id": "Full Body Swimsuit"
		},
		{
			"name": "Scissors",
			"id": 101101
		}
	],
	"buildsInto": [
		{
			"name": "Amazoness Armor",
			"id": "Amazoness Armor"
		}
	],
	"requirements": {
		"Full Body Swimsuit": 1,
		"Scissors": 1
	},
	"stats": {
		"defense": 4,
		"preventSkillDamagedRatio": 0.11
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's a bikini made of a thin fabric. You might wanna suck in your stomach when you're wearing it. It's so versatile, men can wear it, too.",
	"apiMetaData": {
		"code": 202209,
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
