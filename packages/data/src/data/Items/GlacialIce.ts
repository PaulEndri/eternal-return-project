import Item from '../../types/Item';

export const GlacialIce: Item = {
	"id": 205402,
	"name": "GlacialIce",
	"buildsInto": [
		203501,
		204410
	],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Ice": 1
	},
	"stats": {
		"hpRegen": 1.5,
		"spRegen": 1.5,
		"increaseSkillDamageRatio": 18
	},
	"rarity": "Epic",
	"code": "만년빙",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It seems different from normal ice. It practically burns me to the bone by just looking at it. Keep it out of your lemonade.",
	"buildsFrom": [
		205301,
		301103
	],
	"displayName": "Glacial Ice",
	"apiMetaData": {
		"code": 205402,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
