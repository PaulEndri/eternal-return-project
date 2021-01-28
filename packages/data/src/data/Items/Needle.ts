import Item from '../../types/Item';

export const Needle: Item = {
	"id": 120101,
	"name": "Needle",
	"buildsInto": [
		113201,
		113402,
		120201,
		203202,
		302217
	],
	"requirements": {},
	"stats": {
		"attackPower": 3,
		"criticalStrikeDamage": 0.25
	},
	"rarity": "Common",
	"code": "바늘",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 6,
		"Hospital": 6,
		"Hotel": 6
	},
	"foundQuantity": 1,
	"description": "An item with multiple uses; limited only by your imagination.",
	"buildsFrom": [],
	"displayName": "Needle",
	"apiMetaData": {
		"code": 120101,
		"category": "Weapon",
		"type": "Rapier"
	},
	"clientMetaData": {
		"type": "Rapier",
		"category": "Weapon"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
