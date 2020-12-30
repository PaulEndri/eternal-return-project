import Item from '../../types/Item';

export const TurtleShell: Item = {
	"id": 401104,
	"name": "Turtle Shell",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Thuận Thiên",
			"id": "Thuận Thiên"
		},
		{
			"name": "Bone Gauntlet",
			"id": 110401
		},
		{
			"name": "Turtle Dobok",
			"id": 202203
		},
		{
			"name": "Leather Shield",
			"id": 203201
		},
		{
			"name": "Herbal Medicine",
			"id": "Herbal Medicine"
		}
	],
	"requirements": {},
	"stats": {},
	"rarity": "Common",
	"stackable": true,
	"maxStacks": 3,
	"locations": {
		"Pond": 7,
		"Beach": 6,
		"Dock": 7
	},
	"foundQuantity": 1,
	"description": "Reminds me of a sandbox I had as a kid.",
	"apiMetaData": {
		"code": 401104,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
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
