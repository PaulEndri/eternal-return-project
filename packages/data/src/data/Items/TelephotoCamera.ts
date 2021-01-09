import Item from '../../types/Item';

export const TelephotoCamera: Item = {
	"id": 502207,
	"name": "TelephotoCamera",
	"buildsInto": [
		{
			"name": "Intervention",
			"id": 118404
		}
	],
	"requirements": {
		"Surveillance Camera": 1,
		"Binoculars": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "망원카메라",
	"stackable": true,
	"maxStacks": 5,
	"locations": {},
	"foundQuantity": 3,
	"buildsFrom": [
		{
			"name": "Surveillance Camera",
			"id": 502101
		},
		{
			"name": "Binoculars",
			"id": 205110
		}
	],
	"displayName": "Telephoto Camera",
	"apiMetaData": {
		"code": 502207,
		"category": "Special",
		"type": "Summon"
	},
	"clientMetaData": {
		"type": "Summon",
		"category": "Special"
	},
	"droppedFrom": [
		{
			"name": "Wickline",
			"id": 7
		}
	],
	"airSupply": true,
	"collectible": 0
}
