import Item from '../../types/Item';

export const Kabana: Item = {
	"id": 202501,
	"name": "Kabana",
	"buildsFrom": [
		{
			"name": "Meteorite",
			"id": 401209
		},
		{
			"name": "Commander's Armor",
			"id": 202412
		}
	],
	"buildsInto": [],
	"requirements": {
		"Meteorite": 1,
		"Fabric Armor": 1,
		"Leather": 1,
		"Steel Chain": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"defense": 36,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Legend",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The armor of Karna, hero of the epic, Mahabharata. The armor becomes one with the body.",
	"apiMetaData": {
		"code": 202501,
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
