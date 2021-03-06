import Item from '../../types/Item';

export const GlacialShoes: Item = {
	"id": 204410,
	"name": "GlacialShoes",
	"buildsInto": [],
	"requirements": {
		"Slippers": 1,
		"Cloth": 1,
		"Tree of Life": 1,
		"Stone": 1,
		"Ice": 1
	},
	"stats": {
		"hpRegen": 2,
		"moveSpeed": 0.25,
		"moveSpeedOutOfCombat": 0.45,
		"spRegen": 2,
		"spRegenRatio": 0.6,
		"increaseSkillDamageRatio": 15
	},
	"rarity": "Legend",
	"code": "글레이셜슈즈",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"buildsFrom": [
		204301,
		205402
	],
	"displayName": "Glacial Shoes",
	"apiMetaData": {
		"code": 204410,
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
