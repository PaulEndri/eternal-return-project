import Item from '../../types/Item';

export const PlasmaTonfa: Item = {
	"id": 111404,
	"name": "PlasmaTonfa",
	"buildsInto": [],
	"requirements": {
		"Bamboo": 1,
		"Branch": 1,
		"Chalk": 1,
		"Stone": 1,
		"Laster Pointer": 1
	},
	"stats": {
		"attackPower": 65,
		"defense": 18,
		"sightRange": 2.5
	},
	"rarity": "Epic",
	"code": "플라즈마톤파",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A tonfa-shaped weapon made out of plasma. It uses a chip that registers its owner's information, so it won't harm its owner and will be safe to use.",
	"buildsFrom": [
		{
			"name": "Ryukyu Tonfa",
			"id": 111401
		},
		{
			"name": "Laster Pointer",
			"id": 401108
		}
	],
	"displayName": "Plasma Tonfa",
	"apiMetaData": {
		"code": 111404,
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
