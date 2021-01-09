import Item from '../../types/Item';

export const Bikini: Item = {
	"id": 202209,
	"name": "Bikini",
	"buildsInto": [
		{
			"name": "Amazoness Armor",
			"id": 202410
		}
	],
	"requirements": {
		"Scissors": 1
	},
	"stats": {
		"defense": 4,
		"preventSkillDamagedRatio": 0.11
	},
	"rarity": "Uncommon",
	"code": "비키니",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's a bikini made of a thin fabric. You might wanna suck in your stomach when you're wearing it. It's so versatile, men can wear it, too.",
	"buildsFrom": [
		{
			"name": "Wetsuit",
			"id": 202105
		},
		{
			"name": "Scissors",
			"id": 101101
		}
	],
	"displayName": "Bikini",
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
