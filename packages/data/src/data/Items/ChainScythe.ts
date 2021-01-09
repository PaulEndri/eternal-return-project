import Item from '../../types/Item';

export const ChainScythe: Item = {
	"id": 105201,
	"name": "ChainScythe",
	"buildsInto": [
		{
			"name": "Reaper's Scythe",
			"id": 105302
		}
	],
	"requirements": {
		"Pickaxe": 1,
		"Steel Chain": 1
	},
	"stats": {
		"attackPower": 50,
		"attackRange": 0.2
	},
	"rarity": "Uncommon",
	"code": "사슬낫",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A weapon of the Grim Reaper that has a sharp scythe at one end of a steel chain.",
	"buildsFrom": [
		{
			"name": "Pickaxe",
			"id": 105102
		},
		{
			"name": "Steel Chain",
			"id": 119101
		}
	],
	"displayName": "Chain Scythe",
	"apiMetaData": {
		"code": 105201,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
