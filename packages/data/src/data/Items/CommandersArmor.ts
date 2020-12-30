import Item from '../../types/Item';

export const CommandersArmor: Item = {
	"id": 202412,
	"name": "Commander's Armor",
	"buildsFrom": [
		{
			"name": "Chain Armor",
			"id": 202302
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"buildsInto": [
		{
			"name": "Kabana",
			"id": 202501
		}
	],
	"requirements": {
		"Fabric Armor": 1,
		"Leather": 1,
		"Steel Chain": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"defense": 20,
		"increaseSkillDamageRatio": 0.16
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's the General's armor, so it gotta be the strongest armor in town.",
	"apiMetaData": {
		"code": 202412,
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
