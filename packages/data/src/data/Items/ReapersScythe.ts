import Item from '../../types/Item';

export const ReapersScythe: Item = {
	"id": 105302,
	"name": "ReapersScythe",
	"buildsInto": [
		{
			"name": "Santa Muerte",
			"id": 105403
		},
		{
			"name": "Scythe",
			"id": 105404
		},
		{
			"name": "Harpe",
			"id": 105406
		}
	],
	"requirements": {
		"Pickaxe": 1,
		"Steel Chain": 1,
		"Short Rod": 1
	},
	"stats": {
		"attackPower": 80,
		"attackRange": 0.5
	},
	"rarity": "Rare",
	"code": "사신의낫",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A weapon that the Grim Reaper carries. If the scythe claims someone, that soul will vanish.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 105201
		},
		{
			"name": "Scissors",
			"id": 108102
		}
	],
	"displayName": "Reaper's Scythe",
	"apiMetaData": {
		"code": 105302,
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
