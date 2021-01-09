import Item from '../../types/Item';

export const SnipingScope: Item = {
	"id": 205206,
	"name": "SnipingScope",
	"buildsInto": [
		{
			"name": "Sniper Crossbow",
			"id": 115404
		},
		{
			"name": "Humbucker Pickup",
			"id": 121302
		}
	],
	"requirements": {
		"Laster Pointer": 1,
		"Binoculars": 1
	},
	"stats": {
		"attackPower": 6,
		"sightRange": 4
	},
	"rarity": "Uncommon",
	"code": "저격스코프",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You might be able to improve your accuracy with this on a rifle or other firearm.",
	"buildsFrom": [
		{
			"name": "Laster Pointer",
			"id": 401108
		},
		{
			"name": "Binoculars",
			"id": 205110
		}
	],
	"displayName": "Sniping Scope",
	"apiMetaData": {
		"code": 205206,
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
