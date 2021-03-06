import Item from '../../types/Item';

export const CommandersArmor: Item = {
	"id": 202412,
	"name": "CommandersArmor",
	"buildsInto": [
		202501
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
		"preventSkillDamagedRatio": 0.18
	},
	"rarity": "Epic",
	"code": "지휘관의갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's the General's armor, so it gotta be the strongest armor in town.",
	"buildsFrom": [
		202302,
		401214
	],
	"displayName": "Commander's Armor",
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
