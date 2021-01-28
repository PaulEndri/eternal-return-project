import Item from '../../types/Item';

export const Hairband: Item = {
	"id": 201101,
	"name": "Hairband",
	"buildsInto": [
		201201,
		201202
	],
	"requirements": {},
	"stats": {
		"cooldownReduction": 0.02,
		"defense": 4,
		"maxSp": 130
	},
	"rarity": "Common",
	"code": "머리띠",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 7,
		"Avenue": 8,
		"Cemetery": 7
	},
	"foundQuantity": 1,
	"description": "If you use a cheap one, the glue might stick to your hair or ears.",
	"buildsFrom": [],
	"displayName": "Hairband",
	"apiMetaData": {
		"code": 201101,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [
		2
	],
	"airSupply": false,
	"collectible": 0
}
