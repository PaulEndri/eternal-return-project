import Item from '../../types/Item';

export const Flechette: Item = {
	"id": 113410,
	"name": "Flechette",
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
		"moveSpeed": 0.25
	},
	"rarity": "Epic",
	"code": "플레솃",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		113404,
		401206
	],
	"displayName": "Flechette",
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
