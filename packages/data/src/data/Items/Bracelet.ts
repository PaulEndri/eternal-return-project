import Item from '../../types/Item';

export const Bracelet: Item = {
	"id": 203104,
	"name": "Bracelet",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Golden Bracelet",
			"id": 203302
		},
		{
			"name": "Crimson Bracelet",
			"id": 203304
		}
	],
	"requirements": {},
	"stats": {
		"maxSp": 220
	},
	"rarity": "Common",
	"code": "팔찌",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 6,
		"Pond": 7,
		"Uptown": 6
	},
	"foundQuantity": 1,
	"description": "A metal bracelet. It feels tight. Maybe you're just nervous.",
	"displayName": "Bracelet",
	"apiMetaData": {
		"code": 203104,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [
		{
			"name": "WildDog",
			"id": 4
		}
	],
	"airSupply": false,
	"collectible": 0
}
