import Item from '../../types/Item';

export const Flechette: Item = {
	"id": "Flechette",
	"name": "Flechette",
	"href": "/Flechette",
	"buildsFrom": [
		{
			"name": "Plumbata",
			"id": 113404
		},
		{
			"name": "White Powder",
			"id": 401206
		}
	],
	"buildsInto": [],
	"requirements": {
		"Needle": 1,
		"Feather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1,
		"Chalk": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 85,
		"charges": 20,
		"criticalStrikeDamage": 0.4,
		"moveSpeed": 0.2
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"clientMetaData": {
		"type": "Shuriken",
		"category": "Weapon"
	},
	"apiMetaData": {
		"code": null,
		"type": null,
		"category": null
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
