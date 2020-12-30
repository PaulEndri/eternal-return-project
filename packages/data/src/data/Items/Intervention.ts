import Item from '../../types/Item';

export const Intervention: Item = {
	"id": 118404,
	"name": "Intervention",
	"buildsFrom": [
		{
			"name": "Harpoon Gun",
			"id": 118301
		},
		{
			"name": "Telephoto Camera",
			"id": 502207
		}
	],
	"buildsInto": [],
	"requirements": {
		"Long Rifle": 1,
		"Laster Pointer": 1,
		"Short Spear": 1,
		"Surveillance Camera": 1,
		"Binoculars": 1
	},
	"stats": {
		"attackPower": 110,
		"attackRange": 1,
		"sightRange": 4.5
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 118404,
		"category": "Weapon",
		"type": "SniperRifle"
	},
	"clientMetaData": {
		"type": "SniperRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
