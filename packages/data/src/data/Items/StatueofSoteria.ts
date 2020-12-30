import Item from '../../types/Item';

export const StatueofSoteria: Item = {
	"id": 108403,
	"name": "Statue of Soteria",
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
		"hpRegen": 1.2,
		"lifeSteal": 0.1,
		"moveSpeed": 0.15,
		"spRegenRatio": 0.6
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Give me your tired, your poor, your huddled masses yearning to breathe free, the wretched refuse of your teeming shore. Send these, the homeless, tempest-tossed to me. I lift my lamp beside the golden door.",
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
