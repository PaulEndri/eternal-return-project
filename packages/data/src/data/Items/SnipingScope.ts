import Item from '../../types/Item';

export const SnipingScope: Item = {
	"id": 205206,
	"name": "Sniping Scope",
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You might be able to improve your accuracy with this on a rifle or other firearm.",
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
