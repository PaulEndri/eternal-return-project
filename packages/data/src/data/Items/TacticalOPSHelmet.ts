import Item from '../../types/Item';

export const TacticalOPSHelmet: Item = {
	"id": "Tactical OPS Helmet",
	"name": "Tactical OPS Helmet",
	"href": "/Tactical_OPS_Helmet",
	"buildsFrom": [
		{
			"name": "Ballistic Helmet",
			"id": 201301
		},
		{
			"name": "Electronic Parts",
			"id": 401211
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hat": 1,
		"Scissors": 1,
		"Bike Helmet": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackSpeedRatio": 0.2,
		"cooldownReduction": 0.15,
		"defense": 15,
		"maxHp": 120
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A tactical helmet used by special forces. Military grade communication technology is built-in.",
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
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
