import Item from '../../types/Item';

export const ThunderWhip: Item = {
	"id": "Thunder Whip",
	"name": "Thunder Whip",
	"href": "/Thunder_Whip",
	"buildsFrom": [
		{
			"name": "Bullwhip",
			"id": "Bullwhip"
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"buildsInto": [],
	"requirements": {
		"Whip": 1,
		"Razor": 1,
		"Pickaxe": 1,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 55,
		"increaseSkillDamageRatio": 0.18
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Whip",
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
