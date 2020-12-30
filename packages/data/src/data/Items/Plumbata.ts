import Item from '../../types/Item';

export const Plumbata: Item = {
	"id": 113404,
	"name": "Plumbata",
	"buildsFrom": [
		{
			"name": "Dart",
			"id": 113201
		},
		{
			"name": "Steel",
			"id": 401201
		}
	],
	"buildsInto": [
		{
			"name": "Flechette",
			"id": 113410
		}
	],
	"requirements": {
		"Needle": 1,
		"Feather": 1,
		"Scrap Metal": 1,
		"Iron Ore": 1
	},
	"stats": {
		"attackPower": 48,
		"charges": 20,
		"criticalStrikeDamage": 0.25,
		"moveSpeed": 0.1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 113404,
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
