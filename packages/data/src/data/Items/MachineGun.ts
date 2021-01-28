import Item from '../../types/Item';

export const MachineGun: Item = {
	"id": 117402,
	"name": "MachineGun",
	"buildsInto": [
		117403
	],
	"requirements": {
		"Fedorova": 1,
		"Gunpowder": 1,
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {
		"attackPower": 20,
		"attackSpeedRatio": 0.1,
		"charges": 2,
		"sightRange": 1.5,
		"preventBasicAttackDamaged": 11
	},
	"rarity": "Epic",
	"code": "기관총",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A gun that continuously fires bullets when the trigger is held down.",
	"buildsFrom": [
		117201,
		401303
	],
	"displayName": "Machine Gun",
	"apiMetaData": {
		"code": 117402,
		"category": "Weapon",
		"type": "AssaultRifle"
	},
	"clientMetaData": {
		"type": "AssaultRifle",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
