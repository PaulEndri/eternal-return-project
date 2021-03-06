import Item from '../../types/Item';

export const Tonfa: Item = {
	"id": 111201,
	"name": "Tonfa",
	"buildsInto": [
		111301,
		111401
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
	"code": "톤파",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A weapon that is modified and widely used in Okinawa. Tonfa-based martial arts shares many similarities with bare-handed martial arts.",
	"buildsFrom": [
		108103,
		108101
	],
	"displayName": "Tonfa",
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
