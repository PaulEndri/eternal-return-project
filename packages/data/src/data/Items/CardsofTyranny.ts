import Item from '../../types/Item';

export const CardsOfTyranny: Item = {
	"id": 113401,
	"name": "CardsOfTyranny",
	"buildsFrom": [
		{
			"name": "Vintage Cards",
			"id": 113203
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"buildsInto": [],
	"requirements": {
		"Playing Cards": 1,
		"Fountain Pen": 1,
		"Battery": 1,
		"Water": 1,
		"Carbonated Water": 1
	},
	"stats": {
		"attackPower": 49,
		"attackSpeedRatio": 0.3,
		"charges": 52,
		"criticalStrikeChance": 0.2
	},
	"rarity": "Epic",
	"code": "미치광이왕의카드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A brazen claim by some say they used to be fighters, but nobody has ever actually seen them fight.",
	"displayName": "Cards of Tyranny",
	"apiMetaData": {
		"code": 113401,
		"category": "Weapon",
		"type": "DirectFire"
	},
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
