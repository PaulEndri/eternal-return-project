import Item from '../../types/Item';

export const GrenadeOfAntioch: Item = {
	"id": 112305,
	"name": "GrenadeOfAntioch",
	"buildsInto": [],
	"requirements": {
		"Iron Ball": 1,
		"Gunpowder": 2,
		"Piano Wire": 1,
		"Scrap Metal": 1,
		"Cross": 1
	},
	"stats": {
		"attackPower": 85,
		"charges": 8,
		"preventBasicAttackDamaged": 80
	},
	"rarity": "Epic",
	"code": "안티오크의수류탄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		112404,
		205109
	],
	"displayName": "Grenade of Antioch",
	"apiMetaData": {
		"code": 112305,
		"category": "Weapon",
		"type": "HighAngleFire"
	},
	"clientMetaData": {
		"type": "Throw",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
