import Item from '../../types/Item';

export const StatueOfSoteria: Item = {
	"id": 108403,
	"name": "StatueOfSoteria",
	"buildsInto": [],
	"requirements": {
		"Short Rod": 1,
		"Feather": 1,
		"Oil": 1,
		"Bandage": 1,
		"Ribbon": 1,
		"Cloth": 1
	},
	"stats": {
		"attackPower": 90,
		"attackSpeedRatio": 0.15,
		"hpRegen": 0.6,
		"lifeSteal": 0.1,
		"moveSpeed": 0.1,
		"spRegenRatio": 0.6
	},
	"rarity": "Epic",
	"code": "구원의여신상",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Give me your tired, your poor, your huddled masses yearning to breathe free, the wretched refuse of your teeming shore. Send these, the homeless, tempest-tossed to me. I lift my lamp beside the golden door.",
	"buildsFrom": [
		{
			"name": "Torch",
			"id": 108402
		},
		{
			"name": "Doll",
			"id": 205205
		}
	],
	"displayName": "Statue of Soteria",
	"apiMetaData": {
		"code": 108403,
		"category": "Weapon",
		"type": "Bat"
	},
	"clientMetaData": {
		"type": "Bat",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
