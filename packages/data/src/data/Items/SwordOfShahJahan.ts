import Item from '../../types/Item';

export const SwordOfShahJahan: Item = {
	"id": 203407,
	"name": "SwordOfShahJahan",
	"buildsInto": [],
	"requirements": {
		"Leather": 1,
		"Scrap Metal": 1,
		"Hammer": 2,
		"Gemstone": 1
	},
	"stats": {
		"attackPower": 28,
		"maxHp": 300,
		"preventBasicAttackDamaged": 2
	},
	"rarity": "Epic",
	"code": "샤자한의검집",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A sword used by the emperor of India's great Mughal Empire. Due to the jewels around the sword, historians doubt its use in battle.",
	"buildsFrom": [
		{
			"name": "Sheath",
			"id": 203301
		},
		{
			"name": "Ruby",
			"id": 401204
		}
	],
	"displayName": "Sword of Shah Jahan",
	"apiMetaData": {
		"code": 203407,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
