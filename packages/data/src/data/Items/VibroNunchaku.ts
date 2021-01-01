import Item from '../../types/Item';

export const VibroNunchaku: Item = {
	"id": 119402,
	"name": "VibroNunchaku",
	"buildsFrom": [
		{
			"name": "Bleeder",
			"id": 119302
		},
		{
			"name": "Motor",
			"id": 401303
		}
	],
	"buildsInto": [],
	"requirements": {
		"Steel Chain": 1,
		"Scrap Metal": 2,
		"Razor": 1,
		"Battery": 1,
		"Piano Wire": 1
	},
	"stats": {
		"attackPower": 65,
		"attackSpeedRatio": 0.5
	},
	"rarity": "Epic",
	"code": "초진동눈차크",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"displayName": "Vibro Nunchaku",
	"apiMetaData": {
		"code": 119402,
		"category": "Weapon",
		"type": "Nunchaku"
	},
	"clientMetaData": {
		"type": "Nunchaku",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
