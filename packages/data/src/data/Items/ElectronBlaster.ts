import Item from '../../types/Item';

export const ElectronBlaster: Item = {
	"id": 116405,
	"name": "ElectronBlaster",
	"buildsInto": [],
	"requirements": {
		"Walther PPK": 1,
		"Leather": 1,
		"Battery": 1,
		"Water": 1,
		"Carbonated Water": 1
	},
	"stats": {
		"attackPower": 65,
		"attackSpeedRatio": 0.5,
		"charges": 30,
		"moveSpeed": 0.1,
		"increaseBasicAttackDamage": 28
	},
	"rarity": "Epic",
	"code": "일렉트론블라스터",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It's not as strong as the laser guns used on the other side of the cosmos, but it's still pretty powerful.",
	"buildsFrom": [
		{
			"name": "Beretta M92F",
			"id": 116202
		},
		{
			"name": "Ion Battery",
			"id": 401306
		}
	],
	"displayName": "Electron Blaster",
	"apiMetaData": {
		"code": 116405,
		"category": "Weapon",
		"type": "Pistol"
	},
	"clientMetaData": {
		"type": "Pistol",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
