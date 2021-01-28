import Item from '../../types/Item';

export const SurveillanceCamera: Item = {
	"id": 502101,
	"name": "SurveillanceCamera",
	"buildsInto": [
		502207
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"code": "감시카메라",
	"stackable": true,
	"maxStacks": 5,
	"locations": {
		"Avenue": 6,
		"Hospital": 6,
		"Archery Range": 5,
		"School": 6,
		"Cemetery": 6,
		"Beach": 5,
		"Uptown": 6,
		"Dock": 6
	},
	"foundQuantity": 1,
	"buildsFrom": [],
	"displayName": "Surveillance Camera",
	"apiMetaData": {
		"code": 502101,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [
		2,
		3,
		4
	],
	"airSupply": false,
	"collectible": 0
}
