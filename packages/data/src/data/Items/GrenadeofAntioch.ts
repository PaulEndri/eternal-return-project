import Item from '../../types/Item';

export const GrenadeofAntioch: Item = {
	"id": 112305,
	"name": "Grenade of Antioch",
	"buildsFrom": [
		{
			"name": "High Explosive Grenade",
			"id": "High Explosive Grenade"
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
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
