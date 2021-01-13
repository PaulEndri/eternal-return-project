import Item from '../../types/Item';

export const Bazuband: Item = {
	"id": 203303,
	"name": "Bazuband",
	"buildsInto": [
		{
			"name": "Sword Stopper",
			"id": 203402
		}
	],
	"requirements": {
		"Bandage": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"defense": 25,
		"preventBasicAttackDamaged": 8
	},
	"rarity": "Rare",
	"code": "바주반드",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Older styled forearm protectors to protect your, well, forearms.",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 203203
		},
		{
			"name": "Scissors",
			"id": 401213
		}
	],
	"displayName": "Bazuband",
	"apiMetaData": {
		"code": 203303,
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
