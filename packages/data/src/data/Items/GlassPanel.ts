import Item from '../../types/Item';

export const GlassPanel: Item = {
	"id": 401305,
	"name": "Glass Panel",
	"buildsFrom": [
		{
			"name": "Glass Pieces",
			"id": 205204
		},
		{
			"name": "Glue",
			"id": 401116
		}
	],
	"buildsInto": [
		{
			"name": "AK-12",
			"id": 117404
		},
		{
			"name": "Optical Camouflage Suit",
			"id": 202405
		},
		{
			"name": "Radar",
			"id": 203502
		}
	],
	"requirements": {
		"Glass Bottle": 1,
		"Stone": 1,
		"Glue": 1
	},
	"stats": {},
	"rarity": "Rare",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "A glass panel used for a display. If you break the one on your TV, you gotta replace it with a new panel. At that point, you might as well just get a new TV.",
	"apiMetaData": {
		"code": 401305,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		{
			"name": "Wolf",
			"id": 5
		},
		{
			"name": "Bear",
			"id": 6
		}
	],
	"airSupply": true,
	"collectible": 0
}
