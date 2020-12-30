import Item from '../../types/Item';

export const Bazuband: Item = {
	"id": 203303,
	"name": "Bazuband",
	"buildsFrom": [
		{
			"name": "Bracer",
			"id": 203203
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		}
	],
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
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Older styled forearm protectors to protect your, well, forearms.",
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
