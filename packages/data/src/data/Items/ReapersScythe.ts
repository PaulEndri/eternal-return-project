import Item from '../../types/Item';

export const ReapersScythe: Item = {
	"id": "Reaper's Scythe",
	"name": "Reaper's Scythe",
	"href": "/Reaper's_Scythe",
	"buildsFrom": [
		{
			"name": "Chain Scythe",
			"id": 105201
		},
		{
			"name": "Short Rod",
			"id": 108102
		}
	],
	"buildsInto": [
		{
			"name": "Santa Muerte",
			"id": "Santa Muerte"
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A weapon that the Grim Reaper carries. If the scythe claims someone, that soul will vanish.",
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
