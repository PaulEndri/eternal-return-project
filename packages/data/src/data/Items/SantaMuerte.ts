import Item from '../../types/Item';

export const SantaMuerte: Item = {
	"id": "Santa Muerte",
	"name": "Santa Muerte",
	"href": "/Santa_Muerte",
	"buildsFrom": [
		{
			"name": "Reaper's Scythe",
			"id": "Reaper's Scythe"
		},
		{
			"name": "Ruby",
			"id": 401204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Pickaxe": 1,
		"Steel Chain": 1,
		"Short Rod": 1,
		"Hammer": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 100,
		"attackRange": 0.5,
		"lifeSteal": 0.15,
		"maxHp": 450
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Santa Muerte, the Mexican goddess of death, cuts off all negative energies with her long-handled scythe.",
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
