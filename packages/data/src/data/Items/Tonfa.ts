import Item from '../../types/Item';

export const Tonfa: Item = {
	"id": 111201,
	"name": "Tonfa",
	"buildsFrom": [
		{
			"name": "Bamboo",
			"id": 108103
		},
		{
			"name": "Branch",
			"id": 108101
		}
	],
	"buildsInto": [
		{
			"name": "Police Baton",
			"id": 111301
		},
		{
			"name": "Ryukyu Tonfa",
			"id": 111401
		}
	],
	"requirements": {
		"Bamboo": 1,
		"Branch": 1
	},
	"stats": {
		"attackPower": 23,
		"defense": 8
	},
	"rarity": "Uncommon",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A weapon that is modified and widely used in Okinawa. Tonfa-based martial arts shares many similarities with bare-handed martial arts.",
	"apiMetaData": {
		"code": 111201,
		"category": "Weapon",
		"type": "Tonfa"
	},
	"clientMetaData": {
		"type": "Tonfa",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
