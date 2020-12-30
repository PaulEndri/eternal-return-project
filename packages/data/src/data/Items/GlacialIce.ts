import Item from '../../types/Item';

export const GlacialIce: Item = {
	"id": 205402,
	"name": "Glacial Ice",
	"buildsFrom": [
		{
			"name": "Powder of Life",
			"id": 205301
		},
		{
			"name": "Ice",
			"id": 301103
		}
	],
	"buildsInto": [
		{
			"name": "Bracelet of Skadi",
			"id": 203501
		},
		{
			"name": "Glacial Shoes",
			"id": 204410
		}
	],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Ice": 1
	},
	"stats": {
		"hpRegen": 1.5,
		"spRegen": 1.5,
		"increaseSkillDamage": 18
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It seems different from normal ice. It practically burns me to the bone by just looking at it. Keep it out of your lemonade.",
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
