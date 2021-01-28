import Item from '../../types/Item';

export const RedShoes: Item = {
	"id": 204502,
	"name": "RedShoes",
	"buildsInto": [],
	"requirements": {
		"Slippers": 1,
		"Scrap Metal": 1,
		"Glass Bottle": 1,
		"Stone": 1,
		"VF Blood Sample": 1
	},
	"stats": {
		"attackPower": 5,
		"criticalStrikeChance": 0.1,
		"moveSpeed": 0.4,
		"spRegen": 1,
		"increaseBasicAttackDamage": 0.15
	},
	"rarity": "Legend",
	"code": "분홍신",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		204405,
		401401
	],
	"displayName": "Red Shoes",
	"apiMetaData": {
		"code": 204502,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
