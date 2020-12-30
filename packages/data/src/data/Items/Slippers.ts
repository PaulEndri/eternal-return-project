import Item from '../../types/Item';

export const Slippers: Item = {
	"id": 204101,
	"name": "Slippers",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "High Heels",
			"id": 204203
		},
		{
			"name": "Repaired Slippers",
			"id": 204301
		}
	],
	"requirements": {},
	"stats": {
		"moveSpeed": 0.04,
		"spRegen": 0.5
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Avenue": 7,
		"Hospital": 6,
		"School": 7
	},
	"foundQuantity": 1,
	"description": "A slipper soaked in sweat. The stench alone makes it a serious contender as a lethal weapon.",
	"apiMetaData": {
		"code": 204101,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
