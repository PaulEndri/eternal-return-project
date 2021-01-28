import Item from '../../types/Item';

export const Bandage: Item = {
	"id": 203102,
	"name": "Bandage",
	"buildsInto": [
		202206,
		203202,
		203203,
		401202,
		302324
	],
	"requirements": {},
	"stats": {
		"hpRegen": 0.8
	},
	"rarity": "Common",
	"code": "붕대",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Hospital": 6,
		"School": 6,
		"Factory": 6,
		"Dock": 7
	},
	"foundQuantity": 1,
	"description": "A patch that's pretty stretchy. It's good for covering injuries.",
	"buildsFrom": [],
	"displayName": "Bandage",
	"apiMetaData": {
		"code": 203102,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
