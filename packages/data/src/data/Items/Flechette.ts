import Item from '../../types/Item';

export const Flechette: Item = {
	"id": 113410,
	"name": "Flechette",
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
	"apiMetaData": {
		"code": 113410,
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
