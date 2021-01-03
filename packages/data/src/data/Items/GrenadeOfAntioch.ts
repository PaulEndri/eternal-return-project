import Item from '../../types/Item';

export const GrenadeOfAntioch: Item = {
	"id": 112305,
	"name": "GrenadeOfAntioch",
	"buildsFrom": [
		{
			"name": "High Explosive Grenade",
			"id": 112404
		},
		{
			"name": "Cross",
			"id": 205109
		}
	],
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
		"increaseBasicAttackDamage": 80
	},
	"rarity": "Epic",
	"code": "안티오크의수류탄",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
