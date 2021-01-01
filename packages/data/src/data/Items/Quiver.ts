import Item from '../../types/Item';

export const Quiver: Item = {
	"id": 205208,
	"name": "Quiver",
	"buildsFrom": [
		{
			"name": "Leather",
			"id": 401103
		},
		{
			"name": "Bamboo",
			"id": 108103
		}
	],
	"buildsInto": [
		{
			"name": "Laced Quiver",
			"id": 205304
		}
	],
	"requirements": {
		"Leather": 1,
		"Bamboo": 1
	},
	"stats": {
		"attackSpeedRatio": 0.22
	},
	"rarity": "Uncommon",
	"code": "화살통",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Rather pointless by itself. On the otherhand, if you stash some arrows in it...",
	"displayName": "Quiver",
	"apiMetaData": {
		"code": 205208,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
